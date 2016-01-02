Package.describe({
  name: 'accounts-kakao',
  version: '0.0.1',
  summary: 'A login service for Kakao.',
  git: 'https://github.com/supersweet-kr/accounts-kakao',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('accounts-kakao.js');
  api.addFiles('kakao_login_button.css');
});
