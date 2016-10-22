import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components/assets');

test('visiting /components/assets', function(assert) {
  visit('/components/assets');

  andThen(function() {
    assert.equal(currentURL(), '/components/assets');

    percySnapshot(assert);
  });
});
