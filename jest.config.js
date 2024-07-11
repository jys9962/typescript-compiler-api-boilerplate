module.exports = {
  testEnvironment: 'node',
  verbose: true,
  testMatch: [
    '<rootDir>/test/**/*.ts',
  ],
  transform: {
    '.(ts|tsx)': [
      'ts-jest',
      {
        tsconfig: 'tsconfig-test.json',
        compiler: 'ts-patch/compiler',
      },
    ]
  },
}

