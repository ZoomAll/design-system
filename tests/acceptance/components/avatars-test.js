import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components/avatars');

test('visiting /components/avatars', function(assert) {
  visit('/components/avatars');

  andThen(function() {
    assert.equal(currentURL(), '/components/avatars');

    percySnapshot(assert);
  });
});
