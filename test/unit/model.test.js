import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trailpack:model', () => {
  describe('Should properly generate model interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/model'))
        .withArguments(['test'])
        .on('end', done)
    });

    it('Should properly create api files', () => {
      assert.file([
        'api/controllers/TestController.js',
        'api/models/Test.js'
      ]);

      assert.fileContent('api/controllers/TestController.js', /export default \{\}/);
      assert.fileContent('api/models/Test.js', /beforeUpdate:/);
    });

    /*
    it('Should properly create test files', () => {
      assert.file([
        'test/unit/controllers/TestController.test.js',
        'test/unit/models/Test.test.js'
      ]);

      assert.fileContent('test/unit/controllers/TestController.test.js', /import Controller from '\.\.\/\.\.\/\.\.\/api\/controllers\/TestController'/);
      assert.fileContent('test/unit/models/Test.test.js', /import Model from '\.\.\/\.\.\/\.\.\/api\/models\/Test'/);
    });*/
  });
});
