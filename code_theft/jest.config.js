module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {},
  collectCoverageFrom: ["<rootDir>/**/*.{ts, tsx}"],
  roots: ["<rootDir>"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
