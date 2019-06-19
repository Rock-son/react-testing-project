// prettier autoformatonsave in .vscode settings.json file
"use strict";

module.exports = {
	env: {
		"browser": true,
		"commonjs": true,
		"node": true,
		"es6": true
	},
	extends: [
		"plugin:prettier/recommended",
		"prettier/react",
		"eslint:recommended",
		"plugin:react",
		"plugin:jest/recommended",
		"plugin:security/recommended",
		"eslint-config-airbnb"
	],
	settings: {
		"react": {
			"version": "detect"
		},
		"import/resolver": {
			"webpack": {
				"config": "./webpack.config.js"
			},
			"node": {
				"paths": [
					"./" // same as NODE_PATH env variable
				]
			}
		}
	},
	parserOptions: {
		"ecmaVersion": 2018,
		"sourceType": "module",
		"ecmaFeatures": {
			"jsx": true
		},
		'allowImportExportEverywhere': false,
		"sourceType": "module"
	},
	plugins: [
		"react",
		"react-hooks",
		"prettier",
		"jest",
		"security",
		"import"
	],
	rules: {
		// REACT HOOKS
		"linebreak-style": ["error", "unix"],
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn",
		// TEST - jest
		"jest/no-disabled-tests": "warn",
		"jest/no-focused-tests": "error",
		"jest/no-identical-title": "error",
		"jest/prefer-to-have-length": "warn",
		"jest/valid-expect": "error",
		"quote-props": [
			"error",
			"consistent"
		],
		"max-len": [
			"error",
			{
				"code": 125
			}
		],
		"import/extensions": [
			"error",
			"never"
		],
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				"components": ["Link"],
				"specialLink": ["to"]
			}
		],
		"react/jsx-no-bind": [2, {
			"ignoreRefs": false,
			"allowArrowFunctions": false,
			"allowFunctions": false,
			"allowBind": false
		}],
		"react/jsx-indent": [
			2,
			"tab"
		],
		"comma-dangle": [
			"error",
			"only-multiline"
		],
		"strict": [
			0,
			"global"
		],
		"no-tabs": 0,
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			0,
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
