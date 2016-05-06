/**
 * Step 4
 * Default priority in run loop
 */

const _ = require('lodash')

export default function () {
  this.composeWith('node:app', {
      options: _.extend(this.options, {
        travis: false,
        babel: false,
        boilerplate: false,
        gulp: false,
        eslint: false,
        coveralls: false
      })
    },
    {local: require.resolve('@trails/generator-node/generators/app')}
  );
};
