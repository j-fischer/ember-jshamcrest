/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-jshamcrest',

  included: function (app) {
    if (app.tests) {
      app.import('bower_components/jshamcrest/build/jshamcrest.js', {
        type: 'test'
      });
      
      app.import('vendor/ember-jshamcrest/shim.js', {
        type: 'test'
      });
    }
  }
};
