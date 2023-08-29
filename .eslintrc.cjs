/* eslint-env node */
module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:typescript-sort-keys/recommended",
		"plugin:react-hooks/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		warnOnUnsupportedTypeScriptVersion: false,
	},
	plugins: [
		"@typescript-eslint",
		"react-refresh",
		"jsx-a11y",
		"typescript-sort-keys",
		"simple-import-sort",
		"react-hooks",
	],
	root: true,
	rules: {
		"react-refresh/only-export-components": "warn",
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
