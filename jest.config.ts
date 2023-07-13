import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';

module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.jest',
      babelConfig: '<rootDir>/.babelrc',
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, {
      prefix: '<rootDir>/'
    }),

  }
};
