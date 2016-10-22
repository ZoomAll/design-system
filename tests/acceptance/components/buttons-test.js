import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components/buttons');

test('visiting /components/buttons', function(assert) {
  visit('/components/buttons');

  andThen(function() {
    assert.equal(currentURL(), '/components/buttons');

    percySnapshot(assert);
  });
});
