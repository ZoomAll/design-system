import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | base styles/typography');

test('visiting /base-styles/typography', function(assert) {
  visit('/base-styles/typography');

  andThen(function() {
    assert.equal(currentURL(), '/base-styles/typography');

    percySnapshot(assert);
  });
});
