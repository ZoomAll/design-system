import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | identity/assets');

test('visiting /identity/assets', function(assert) {
  visit('/identity/assets');

  andThen(function() {
    assert.equal(currentURL(), '/identity/assets');

    percySnapshot(assert);
  });
});
