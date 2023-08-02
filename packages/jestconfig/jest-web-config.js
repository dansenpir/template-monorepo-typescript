const config = require("./jest.config");
module.exports = Object.assign({}, config, {
  collectCoverageFrom: [...config.collectCoverageFrom, "!**/*.d.ts"],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/tests/e2e/cypress",
  ],
  testEnvironment: "jsdom",
});
