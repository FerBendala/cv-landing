const eslint_config = {
	env: {
		browser: true,
		es2024: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:@typescript-eslint/recommended',
		'eslint:recommended',
		'plugin:@tanstack/eslint-plugin-query/recommended',
		'plugin:tailwindcss/recommended'
	],
	overrides: [
		{
			files: [
				'**/__tests__/**/*.[jt]s?(x)',
				'**/?(*.)+(spec|test).[jt]s?(x)'
			],
			extends: ['plugin:testing-library/react']
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react', '@typescript-eslint', '@tanstack/query', 'tailwindcss'],
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'linebreak-style': 0,
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		eqeqeq: 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': ['error', 'always'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'no-console': 1,
		'react/react-in-jsx-scope': 'off',
		'global-require': 'off',
		'no-case-declarations': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'@typescript-eslint/no-explicit-any': 'warn',
		'no-unused-vars': 'warn',
		'jsx-quotes': ['error', 'prefer-single']
	},
	settings: {
		react: {
			version: 'detect'
		}
	}
};

module.exports = eslint_config;
