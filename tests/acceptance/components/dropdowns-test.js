import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components/dropdowns');

test('visiting /components/dropdowns', function(assert) {
  visit('/components/dropdowns');

  andThen(function() {
    assert.equal(currentURL(), '/components/dropdowns');

    percySnapshot(assert);
  });
});
