Package.describe({
  name: 'accounts-kakao',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A login service for Kakao.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/supersweet-kr/accounts-kakao',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('accounts-kakao.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('accounts-kakao');
  api.addFiles('accounts-kakao-tests.js');
});
