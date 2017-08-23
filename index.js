/* eslint-env node */
'use strict';

let path = require('path');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-jshamcrest',

  treeForVendor: function(tree) {
    let jsHamcrestAssets = path.join(this.project.nodeModulesPath, 'jshamcrest');

    tree = (tree) ? mergeTrees([ tree, jsHamcrestAssets ]) : jsHamcrestAssets;

    return tree;
  },

  included: function (app) {
    if (app.tests) {
      app.import('vendor/jshamcrest.js', {
        type: 'test'
      });

      app.import('vendor/ember-jshamcrest/shim.js', {
        type: 'test'
      });
    }
  }
};
