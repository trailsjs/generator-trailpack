import path from 'path';
import os from 'os';
import { assert, test } from 'yeoman-generator';

describe('trailpack:api', () => {
  describe('Should properly generate api interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '../../src/api'))
        .withArguments(['apiTest'])
        .withOptions({ test : true })
        .on('end', done)
    });

    it('Should properly create controller files', () => {
      assert.file([
        'api/controllers/ApiTestController.js'
      ]);
    });

    it('Should properly create model files', () => {
      assert.file([
        'api/models/ApiTest.js'
      ]);
    });

    it('Should properly create test files', () => {
      assert.file([
        'test/integration/controllers/ApiTestController.test.js',
        'test/unit/models/ApiTestController.test.js'
      ]);

    });
  });
});
