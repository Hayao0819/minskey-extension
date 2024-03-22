"use strict";

const eslintConfig = {
    env: {
        browser: true,
        es2023: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        //"plugin:tailwindcss/recommended",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        sourceType: "module",
    },
    root: true,
    plugins: [
        //"tailwindcss",
        "unused-imports",
        "prettier",
        "simple-import-sort",
        "no-unsanitized",
    ],
    rules: {
        "simple-import-sort/imports": "warn",
        "simple-import-sort/exports": "warn",
        "prettier/prettier": "warn",

        "unused-imports/no-unused-imports": "error",
        //"tailwindcss/no-custom-classname": ["warn"],
        "no-unsanitized/method": "warn",
        "no-unsanitized/property": "warn",
    },
    overrides: [
        {
            files: ["*.ts", "*.tsx"],
            extends: ["plugin:@typescript-eslint/recommended"],
            plugins: ["@typescript-eslint"],
            parser: "@typescript-eslint/parser",
            rules: {
                "@typescript-eslint/no-non-null-assertion": "off",
                "no-unused-vars": "off",
                "@typescript-eslint/no-unused-vars": ["error"],
            },
        },
    ],
};

module.exports = eslintConfig;
