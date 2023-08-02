/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/main/**",
    "!<rootDir>/src/**/index.ts",
  ],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "@/tests/(.+)": "<rootDir>/tests/$1",
    "@/(.+)": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  preset: "ts-jest",
  transform: {
    "\\.ts$": "ts-jest",
  },
};
