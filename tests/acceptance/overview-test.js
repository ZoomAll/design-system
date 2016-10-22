import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | overview');

test('visiting /overview', function(assert) {
  visit('/overview');

  andThen(function() {
    assert.equal(currentURL(), '/overview');

    percySnapshot(assert);
  });
});
