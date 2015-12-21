import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trailpack:app', () => {
  describe('Should create trailpack from trailpack/archetype', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/app'))
        .withPrompts({ license: 'MIT', email: 'hello@trailsjs.io' }) // Mock the prompt answers
        .withOptions({
          'skip-update': true,
          'skip-install': true
        })
        .on('end', done)
    });

    it('Should properly create root files', () => {
      assert.file([
        'index.js',
        'api/index.js',
        'config/index.js',
        'config/trailpack.js',
        'package.json',
        'README.md'
      ]);
    });
  });
});
