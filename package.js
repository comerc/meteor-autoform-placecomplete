Package.describe({
  name: 'comerc:autoform-placecomplete',
  summary: 'Custom "placecomplete" input type for AutoForm',
  version: '2.2.2',
  git: 'https://github.com/comerc/meteor-autoform-placecomplete.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('templating@1.0.0');
  api.use('blaze@2.0.0');
  api.use('aldeed:autoform@5.0.0');
  api.use('jquery', 'client');
  api.addFiles([
    'autoform-placecomplete.html',
    'autoform-placecomplete.js',
    'placecomplete/jquery.placecomplete.css',
    'placecomplete/jquery.placecomplete.js',
  ], 'client');
});
