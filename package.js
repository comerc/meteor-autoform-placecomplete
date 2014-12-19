Package.describe({
  name: 'comerc:autoform-placecomplete',
  summary: 'Custom placecomplete input type for AutoForm',
  version: '2.1.0',
  git: 'https://github.com/comerc/meteor-autoform-placecomplete.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.addFiles([
    'autoform-placecomplete.html',
    'autoform-placecomplete.js',
    'themes/bootstrap3.html',
    'themes/bootstrap3.js',
    'placecomplete/jquery.placecomplete.css',
    'placecomplete/jquery.placecomplete.js',
  ], 'client');
});
