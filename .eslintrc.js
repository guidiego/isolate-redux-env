module.exports = {
    "extends": "airbnb-base",
    "installedESLint": true,
    "plugins": [
        "import"
    ],
    "settings": {
      "import/resolver": "webpack"
    },
    "rules": {
        "import/extensions": [
            2,
            "never"
        ],
        "import/prefer-default-export": 0
    }
};
