# ember-jshamcrest

Ember addon to make [JsHamcrest](https://github.com/danielfm/jshamcrest) available as an import in your tests.

`ember-jshamcrest` was inspired by [ember-sinon](https://github.com/csantero/ember-sinon).

## Installation

Install JsHamcrest in your ember application using the latest Ember CLI:

    $ ember install ember-jshamcrest

## JsMock

The Ember JsHamcrest project was created to complement [JsMock](http://www.jsmock.org) in Ember projects.
JsMock is a simple Javascript mocking framework, which provides an clean and simple interface for setting
up mock objects in your unit test. See [http://www.jsmock.org](http://www.jsmock.org) for more details.

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

ember-jshamcrest is licensed under [BSD 3-clause](https://github.com/j-fischer/ember-jshamcrest/blob/master/LICENSE.md)

## Changelog

Due to a number of NPM packaging issues (see https://github.com/npm/npm/issues/5082), some packages are missing the index.js file. Those packages have been deprecated.

### 0.2.0

- Upgraded Ember CLI and addon to version 2.6

### 0.1.x

- Initial release