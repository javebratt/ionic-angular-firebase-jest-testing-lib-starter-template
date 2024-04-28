export default {
  displayName: 'ionic-angular-firebase-jest-testing-lib-starter-template',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  preset: 'jest-preset-angular',
  coverageDirectory:
    '../../coverage/ionic-angular-firebase-jest-testing-lib-starter-template',
  transform: {
    '^.+\\.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: [
    'node_modules/(?!@ionic/core|@stencil/core|ionicons|@ionic-enterprise/*|@awesome-cordova-plugins/*|.*.mjs$)',
    'node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)',
  ],
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
};
