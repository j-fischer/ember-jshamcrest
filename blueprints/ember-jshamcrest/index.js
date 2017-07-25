module.exports = {
  description: 'Adds JsHamcrest to npm dependencies.',

  normalizeEntityName: function() {
    // this prevents an error when the entityName is
    // not specified (since that doesn't actually matter
    // to us
  },

  afterInstall: function() {
    return this.addPackageToProject('jshamcrest');
  }
};
