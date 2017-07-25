/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-jshamcrest',

  included: function (app) {
    if (app.tests) {
      app.import(this.project.nodeModulesPath + '/jshamcrest/jshamcrest.js', {
        type: 'test'
      });

      app.import('vendor/ember-jshamcrest/shim.js', {
        type: 'test'
      });
    }
  }
};
