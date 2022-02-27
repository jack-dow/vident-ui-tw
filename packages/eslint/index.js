module.exports = {
  extends: [
    "next",
    "prettier",
    "airbnb",
    "airbnb-typescript",
    "plugin:jest/recommended",
  ],
  plugins: ["jest", "import", "react", "jsx-a11y"],
  settings: {
    next: {
      rootDir: ["./apps/*/", "./packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "max-len": [
      "error",
      100,
      {
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      },
    ],
    // typescript-eslint overrides
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-expressions": "off",

    // sometimes it is better
    "no-nested-ternary": "off",

    // prettier handles
    "spaced-comment": "off",

    // these are totally useless
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "react/state-in-constructor": "off",
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": "off",
    "jsx-a11y/control-has-associated-label": "off",
    "react/destructuring-assignment": "off",
    "react/sort-comp": "off",
    "react/no-danger": "off",
    "import/prefer-default-export": "off",

    // sometimes there is no alternative
    "react/no-array-index-key": "off",

    // Allow as props must be true to allow for 'as' prop to work.
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

    // does not matter for monorepo
    "import/no-extraneous-dependencies": "off",

    // rules are broken and provide falsy mistakes
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/anchor-is-valid": "off",

    // does not work with 'as' prop really isn't required imo.
    "jsx-a11y/anchor-has-content": "off",

    // it does not spoil anything if used wisely
    "jsx-a11y/no-autofocus": "off",

    // incorrectly throws errors
    "react/prop-types": "off",
  },
};
