module.exports = {
  "rootDir": "./",
  "moduleFileExtensions": [
    "js",
    "json"
  ],
  "testRegex": "/__tests__/.*_test\\.js$",
  "slowTestThreshold": 30000,
  "transform": {
    "^.+\\.[t|j]s$": ["babel-jest", {}]
  },
  "transformIgnorePatterns": [
    "/node_modules/(?!@babel|shorter-js).+\\.js$"
  ],
  "collectCoverageFrom": [
    "**/*.js"
  ],
  "coveragePathIgnorePatterns": [
    "/__jest__/",
    "/__tests__/",
    "/jsdoc/",
    "/coverage/",
    "jest.config.js"
  ]
};
