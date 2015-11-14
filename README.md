# ember-jshamcrest

Ember addon to make [JsHamcrest](https://github.com/danielfm/jshamcrest) available as an import in your tests. 

`ember-jshamcrest` was inspired by [ember-sinon](https://github.com/csantero/ember-sinon).

## Installation

Install JsHamcrest in your ember application using the latest Ember CLI:

    $ ember install ember-jshamcrest

## Getting Started

In order to use JsHamcrest in your tests, simply import it in your test file.  

    import Ember from 'ember';
    import { module, test } from 'qunit';
    import startApp from '../../tests/helpers/start-app';
    import JsHamcrest from 'jshamcrest';

    module('Acceptance | js mock', {
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

## API Docs

The full API documentation for JsHamcrest can be found [here](http://danielmartins.ninja/jshamcrest/).

## License

JsHamcrest is licensed under [BSD](https://github.com/danielfm/jshamcrest/blob/master/LICENSE) 

MIT, see [License.md](https://github.com/j-fischer/ember-jshamcrest/blob/master/LICENSE.md)

## Changelog

### 0.1.0

- Initial release