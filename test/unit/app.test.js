import path from 'path';
import { assert } from 'yeoman-generator';
import test from 'yeoman-test';

describe('trailpack:app', () => {
  describe('Should create trailpack from trailpack/archetype', () => {
    before(() => {
      return test.run(path.join(__dirname, '..', '..', 'generators', 'app'))
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
        .toPromise()
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
    it('should set correct license in package.json', () => {
      assert.JSONFileContent('package.json', { license: 'MIT' })
    })
    it('should set correct class name in index.js', () => {
      assert.fileContent('index.js', /class TestTrailpack extends Trailpack/)
    })
    it('should set correct title in README', () => {
      assert.fileContent('README.md', /^# trailpack-test/)
    })
    it('should set correct require in README "configure" section', () => {
      assert.fileContent('README.md', "require('trailpack-test')")
    })
  });
});

