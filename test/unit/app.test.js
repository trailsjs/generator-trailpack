import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trailpack', () => {
  describe('Should create from trailpack/archtype', () => {
    before(done => {
      /*test
        .run(path.join(__dirname, '../../src/app'))
        .withGenerators([
          [test.createDummyGenerator(), 'trailpack:controller'],
          [test.createDummyGenerator(), 'trailpack:model'],
          [test.createDummyGenerator(), 'trailpack:policy'],
          [test.createDummyGenerator(), 'trailpack:service']
        ])
        .on('end', done);*/
      test
        .run(path.join(__dirname, '../../generators/app'))
        .withArguments(['test'])
        .withOptions({
          'licence': 'MIT'
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
