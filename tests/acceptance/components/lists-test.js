import { test } from 'qunit';
import moduleForAcceptance from 'design-system/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | components/lists');

test('visiting /components/lists', function(assert) {
  visit('/components/lists');

  andThen(function() {
    assert.equal(currentURL(), '/components/lists');

    percySnapshot(assert);
  });
});
