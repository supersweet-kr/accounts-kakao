Package.describe({
  name: 'supersweet:accounts-kakao',
  version: '0.0.1',
  summary: 'A login service for Kakao.',
  git: 'https://github.com/supersweet-kr/accounts-kakao',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('accounts-base@1.2.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.2.2', ['client', 'server']);
  api.use('accounts-oauth@1.1.8', ['client', 'server']);
  api.use('spectrum:kakao@0.0.3', ['client', 'server']);

  api.addFiles('kakao.js');
  api.addFiles('kakao_login_button.css', 'client');
});
