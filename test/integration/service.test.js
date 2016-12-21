import path from 'path'
import assert from 'yeoman-assert'
import test from 'yeoman-test'

describe('trailpack:service', () => {
  describe('Should properly generate service interface', () => {
    before(done => {
      test
        .run(path.join(__dirname, '..', '..', 'src', 'service'))
        .withArguments(['test'])
        .on('end', done)
    });

    it('Should properly create service files', () => {
      assert.file([
        'api/services/TestService.js'
      ]);

    });

    it('Should properly create test files', () => {
      assert.file([
        'test/unit/services/TestService.test.js'
      ]);

    });
  });
});
