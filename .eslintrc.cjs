const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');

const toLintAliases = () => {
    const content = readFileSync(resolve('./aliases.json'), 'utf8');
    const { alias, extensions } = JSON.parse(content);

    return {
        map: Object.entries(alias),
        extensions,
    };
};

module.exports = {
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:vue/recommended',
        'plugin:promise/recommended',
        'plugin:prettier/recommended',
    ],
    globals: {
        VITE_ANTON_VARIABLE: 'readonly',
    },
    rules: {
        'import/no-unresolved': [
            'error',
            {
                ignore: ['\\.svg\\?meta', '\\.*\\?url'],
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                // js: "never",
                // ts: 'never',
                json: 'never',
                // vue: 'never',
            },
        ],
        'sort-imports': [
            'error',
            {
                ignoreCase: true,
                ignoreDeclarationSort: true,
            },
        ],
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal'],
                pathGroups: [
                    {
                        pattern: '{,**/}{consts,helpers,services}/**',
                        group: 'internal',
                        position: 'before',
                    },
                    {
                        pattern: '{,**/}{components,new-components}/**',
                        group: 'internal',
                        position: 'before',
                    },
                ],
                distinctGroup: true,
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true,
                },
            },
        ],
        'no-console': ['error'],
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsForRegex: ['^accu?m?(ulator)?$'],
            },
        ],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
            { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
            {
                blankLine: 'any',
                prev: ['const', 'let', 'var'],
                next: ['const', 'let', 'var'],
            },
        ],
        'vue/component-name-in-template-casing': ['error', 'PascalCase'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'any',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            },
        ],
        indent: [2, 4, { SwitchCase: 1 }],
        // Disable multi-word component names.
        'vue/multi-word-component-names': 'off',
        'vue/order-in-components': 'error',
        // Additional rules for promises.
        'promise/prefer-await-to-callbacks': 'warn',
        'promise/prefer-await-to-then': 'warn',
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
    },
    settings: {
        'import/resolver': {
            alias: toLintAliases(),
        },
    },
};
