module.exports = {
	testEnvironment: "enzyme",
	setupFilesAfterEnv: ["<rootDir>/client/setupTests.js", ],
	testEnvironmentOptions: {
		"enzymeAdapter": "react16"
	},
	testPathIgnorePatterns: [
		"<rootDir>/node_modules/",
		"<rootDir>/dist",
		"<rootDir>/client/src/__tests__/data*.*"
	],
	transformIgnorePatterns: [
		"[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"
	],
	verbose: true,
	testURL: "http://localhost",
	testMatch: [
		"<rootDir>/**/src/__tests__/*.{js,jsx,mjs}",
		"<rootDir>/**/src/__tests__/*.{js,jsx,mjs}"
	],
	coverageThreshold: {
		"./client/": {
			"branches": 40,
			"statements": 40
		},
	},
	coverageReporters: [
		"text"
	],
	reporters: [
		"default",
		["jest-junit", {
			"suiteName": "jest tests test example",
			"outputDirectory": "./coverage",
			"outputName": "./junit.xml",
			"ancestorSeparator": " › ",
			"usePathForSuiteName": "true"
		}]
	]
};
