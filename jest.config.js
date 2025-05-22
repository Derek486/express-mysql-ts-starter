/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  transform: {
    "^.+\.tsx?$": ["ts-jest",{}],
  },
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^tests/(.*)$': '<rootDir>/tests/$1',
    '^@http/(.*)$': '<rootDir>/src/http/$1',
    '^@persistence/(.*)$': '<rootDir>/src/persistence/$1',
    '^@infrastructure/(.*)$': '<rootDir>/src/infrastructure/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
  },
};