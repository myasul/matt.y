module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    ignorePatterns: ['**.txt'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        'react',
        '@typescript-eslint'
    ],
    rules: {
        "indent": "off"
    },
    overrides: [{
        files: ['*.ts', '*.tsx'],
        extends: [
            'standard-with-typescript',
            'plugin:@typescript-eslint/recommended',
        ],
        parserOptions: {
            project: ['./tsconfig.json']
        },
        rules: {
            "@typescript-eslint/indent": ["error", 4],
            "@typescript-eslint/consistent-type-definitions": 'off',
            "@typescript-eslint/explicit-function-return-type": 'off',
            "@typescript-eslint/no-unused-vars": ["error"],
            "@typescript-eslint/no-extraneous-class": ['error', { 'allowStaticOnly': true }],
            "@typescript-eslint/strict-boolean-expressions": 'off'
        }
    }]
}
