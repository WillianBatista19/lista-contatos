const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/pages/(.*)$': '<rootDir>/pages/$1',
    '^@/app/(.*)$': '<rootDir>/src/app/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  transformIgnorePatterns: [
    '/node_modules/(?!(firebase|@firebase)/)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',        
    '/app/layout.tsx',       
    '/components/privateRoute.tsx' 
  ],
};

module.exports = createJestConfig(customJestConfig);
