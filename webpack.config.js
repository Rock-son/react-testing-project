"use strict";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {
	CleanWebpackPlugin
} = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


// HTML_WEBPACK_PLUGIN
const TEMPLATE_FILE_IN = "./client/template.html";
const TEMPLATE_FILE_OUT = "./index.html";
// environment
const __DEV__ = process.env.NODE_ENV !== 'production';
const OUTPUT_DIR = "./dist";
const VENDOR_LIBS = ["react", "react-dom", "react-router", "react-router-dom"];

const config = {
	mode: __DEV__ ? "development" : "production",
	entry: {
		bundle: path.join(__dirname, "client/index.jsx"),
		vendor: VENDOR_LIBS
	},
	output: {
		filename: __DEV__ ? "[name].js" : "[name]-[contenthash].js",
		chunkFilename: __DEV__ ? "[id].js" : "[id]-[contenthash].js",
		path: path.join(__dirname, OUTPUT_DIR)
	},
	resolve: {
		// for components reusability - but problem with tests that don't execute with webpack
		alias: {
			// HOME
			Home: path.join(__dirname, "components/Home.jsx"),
		},
		extensions: [".js", ".jsx"]
	},
	devtool: __DEV__ ? "inline-source-map" : "source-map",
	module: {
		rules: [{
				test: /\.jsx?$/,
				use: "babel-loader",
				exclude: /(node_modules)/
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: __DEV__,
							// if hmr (hot module reloading) does not work, this is a forceful method.
							reloadAll: true,
						},
					},
					"css-loader",
					"resolve-url-loader", // all urls would have to be relative to the entry-file if not for this plugin (+sass-loader)
					"postcss-loader",
					"sass-loader"
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: "all"
		},
		// if you minimize css, you have to set js minimizer too
		minimizer: __DEV__ ? [] : [
			new UglifyJsPlugin({
				cache: true,
				sourceMap: true,
				parallel: true,
				uglifyOptions: {
					ecma: 6,
					warnings: false,
					mangle: true
				}
			}),
			new OptimizeCSSAssetsPlugin({})
		],
	},
	plugins: [
		// If using webpack 4+'s default configuration, everything under <PROJECT_DIR>/dist/ will be removed.
		new CleanWebpackPlugin(),
		// provides a way to customize how progress is reported during a compilation
		new webpack.ProgressPlugin(),
		// moves all required("*.css") files into a separate CSS file
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output - both options optional
			filename: __DEV__ ? "styles/[name].css" : "styles/[name].[contenthash].css",
			chunkFilename: __DEV__ ? 'styles/[id].css' : 'styles/[id].[contenthash].css',
		}),
		// writes tepmlate to OUTPUTFOLDER with a supplied filename
		new HtmlWebpackPlugin({
			template: TEMPLATE_FILE_IN,
			filename: TEMPLATE_FILE_OUT
		}),
		//  allows you to create global constants which can be configured at compile time
		new webpack.DefinePlugin({
			"process.env": {
				"NODE_ENV": JSON.stringify(__DEV__ ? "development" : "production")
			},
			"__DEVTOOLS__": !__DEV__
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};

if (__DEV__) {
	config.plugins.push(new FriendlyErrorsWebpackPlugin());
	// https://webpack.js.org/configuration/dev-server/
	config.devServer = {
		contentBase: [path.join(__dirname, OUTPUT_DIR), path.join(__dirname, "client/assets")],
		open: true, // automatically open home page on startup
		compress: true,
		port: "9000",
		hot: true,
		// enables Hot Module Replacement (see devServer.hot) without page refresh as fallback in case of build failures.
		quiet: true
	};
}

module.exports = config;
