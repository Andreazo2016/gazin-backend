module.exports = {
  roots: ["<rootDir>/tests"],
  testEnvironment: "node",
  preset: "ts-jest",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/tests/(.*)": "<rootDir>/tests/$1",
    "@/(.*)": "<rootDir>/src/$1",
  },
};
