module.exports = {
    roots: ['<rootDir>/packages'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/test/helper/'],
    runner: 'groups',
    setupFiles: ['<rootDir>/jest.setup.js'],
    testPathIgnorePatterns: [
        '<rootDir>/packages/functions/parse-inserzione/test/helpers/readResources.ts',
        '<rootDir>/packages/functions/insert-inserzione-in-rdbms/test/resources/LTT.ts',
        '<rootDir>/packages/functions/insert-esperimento-in-rdbms/test/helpers/readResources.ts',
    ],
};
