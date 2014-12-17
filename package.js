Package.describe({
  name: 'comerc:autoform-geo',
  summary: 'Custom geo input types for AutoForm',
  version: '0.0.1',
  git: 'https://github.com/comerc/meteor-autoform-geo.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@4.0.0');
  api.addFiles([
    'autoform-geo.html',
    'autoform-geo.js',
    'themes/bootstrap3.html',
    'themes/bootstrap3.js',
    'placecomplete/jquery.placecomplete.css',
    'placecomplete/jquery.placecomplete.js',
  ], 'client');
});
