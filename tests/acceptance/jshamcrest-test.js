import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import JsHamcrest from 'jshamcrest';

module('Acceptance | jshamcrest', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('verify JsHamcrest is available', function(assert) {  
  assert.ok(JsHamcrest);
  assert.ok(JsHamcrest.Matchers);
  assert.ok(JsHamcrest.Operators);
});