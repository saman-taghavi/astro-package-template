/** @type {import("eslint").Linter.Config} */
module.exports = {
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"plugin:astro/recommended",
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"airbnb",
		"airbnb/hooks",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		tsconfigRootDir: __dirname,
		sourceType: "module",
		ecmaVersion: "latest",
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", "jsx-a11y"],
	rules: {
		/** @see https://stackoverflow.com/questions/55614983/jsx-not-allowed-in-files-with-extension-tsxeslintreact-jsx-filename-extensio */
		"react/jsx-filename-extension": [2, { extensions: [".js", ".jsx", ".ts", ".tsx", ".astro"] }],
		"react/react-in-jsx-scope": "off",
		camelcase: "error",
		"spaced-comment": "error",
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		"no-duplicate-imports": [
			"error",
			{
				includeExports: true,
			},
		],
		"template-curly-spacing": ["error", "never"],
		"no-self-compare": "error",
		"no-unreachable-loop": "error",
		"no-use-before-define": "error",
		curly: "error",
		"default-case": "error",
		"jsx-a11y/label-has-associated-control": [
			"off",
			{
				required: {
					some: ["nesting", "id"],
				},
			},
		],
		"jsx-a11y/label-has-for": [
			"off",
			{
				required: {
					some: ["nesting", "id"],
				},
			},
		],
		"jsx-a11y/anchor-is-valid": "off",
		"jsx-a11y/no-noninteractive-tabindex": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "off",
		"jsx-a11y/no-static-element-interactions": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"import/no-unresolved": "off",
		"import/named": "off",
		"@typescript-eslint/no-explicit-any": "off",
		"no-useless-escape": "off",
		"import/prefer-default-export": "off",
		"import/extensions": "off",
		"no-redeclare": "off",
		"no-console": "warn",
		/**
		 * @see  https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unstable-nested-components.md
		 */
		"react/no-unstable-nested-components": [
			"error",
			{
				allowAsProps: true,
			},
		],
		/** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md */
		"react/require-default-props": [
			"error",
			{
				functions: "defaultArguments",
			},
		],
		/** @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md */
		"react/no-unknown-property": "off",
		/** @see https://github.com/import-js/eslint-plugin-import/blob/v2.28.0/docs/rules/order.md we will use prettier plugin for this */
		"import/order": "off",
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		react: {
			version: "detect",
		},
	},
	overrides: [
		{
			files: ["*.astro"],
			parser: "astro-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
				extraFileExtensions: [".astro"],
			},
			rules: {
				// override/add rules settings here, such as:
				// "astro/no-set-html-directive": "error"
			},
		},
	],
	ignorePatterns: ["/node_modules/", "/dist/", "/build/", "/coverage/", "/public/", "*.config.*"],
}
