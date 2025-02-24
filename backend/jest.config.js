module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).ts'],
  setupFilesAfterEnv: ['./tests/setup.ts'],
  modulePathIgnorePatterns: ['./src/core/config/test.ts'],
  maxWorkers: 1,
};
