import path from 'path';
import { assert, test } from 'yeoman-generator';

describe('trailpack:app', () => {
  describe('Should create trailpack from trailpack/archetype', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/app'))
        .withPrompts({
          name: 'trailpack-test',
          authorName: 'trailsjs',
          authorEmail: 'hello@trailsjs.io',
          license: 'MIT'
        })
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

    it('should set correct module name in package.json', () => {
      assert.JSONFileContent('package.json', { name: 'trailpack-test' })
    })
    it('should set correct class name in index.js', () => {
      assert.fileContent('index.js', /class TestTrailpack extends Trailpack/)
    })
  });
});
