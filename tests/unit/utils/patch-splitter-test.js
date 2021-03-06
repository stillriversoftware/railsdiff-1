import patch from '../../fixtures/patch';
import patchSplitter from 'rails-diff/utils/patch-splitter';
import { module, test } from 'qunit';

module('Unit | Utility | patchSplitter');

test('returns array', function(assert) {
  const result = patchSplitter('');
  assert.ok(result instanceof Array);
});

test('sets file paths', function(assert) {
  const result = patchSplitter(patch);
  const paths = result.mapBy('filePath');
  assert.deepEqual(paths, ['Gemfile', 'config/routes.rb']);
});

test('sets source versions', function(assert) {
  const result = patchSplitter(patch);
  const versions = result.mapBy('sourceVersion');
  assert.deepEqual(versions, ['3.1.1', '3.1.1']);
});

test('sets target versions', function(assert) {
  const result = patchSplitter(patch);
  const versions = result.mapBy('targetVersion');
  assert.deepEqual(versions, ['3.2.6', '3.2.6']);
});
