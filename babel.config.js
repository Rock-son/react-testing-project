module.exports = (api) => {
	api.cache(true);

	const presets = [
		["@babel/preset-env",
			{
				"targets": {
					// The % refers to the global coverage of users from browserslist
					"browsers": [">0.5%"],
					"node": "current"
				},
				"useBuiltIns": "entry",
				"corejs": "core-js@3",
				"forceAllTransforms": true
			}
		],
		"@babel/preset-react"
	];

	const plugins = [
		"@babel/plugin-proposal-object-rest-spread",
		"@babel/plugin-proposal-export-default-from"
	];

	return {
		presets,
		plugins
	};
};