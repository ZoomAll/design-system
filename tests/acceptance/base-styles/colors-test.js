import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | base styles/colors');

test('visiting /base-styles/colors', function(assert) {
  visit('/base-styles/colors');

  andThen(function() {
    assert.equal(currentURL(), '/base-styles/colors');

    percySnapshot(assert);
  });
});
