module.exports = {
  rootDir: process.cwd(),
  moduleFileExtensions: ['js', 'ts', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: ['**/tests/**/*.spec.ts'],
  testURL: 'http://localhost/',
  globals: {
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [],
      },
    },
  },
};
