/**
 * Step 5
 * Where you write the generator specific files (routes, controllers, etc)
 */

const Util = require('../util')
const falafel = require('falafel')
const path = require('path')
const TRAILS_TEMPLATE = path.dirname(require.resolve('trailpack/archetype'))

export default {
  genericApi () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'api', '**'), this.destinationPath('api'))
  },
  config () {
    this.fs.copy(path.resolve(TRAILS_TEMPLATE, 'config', '**'), this.destinationPath('config'))
  },
  pkg () {
    // node:app generator will merge into this
    if (!this.options['skip-install']) {
      let trailsPackage = require(path.resolve(TRAILS_TEMPLATE, 'package.json'))
      this.fs.writeJSON(this.destinationPath('package.json'), trailsPackage)
    }
  },
  trailpackClass () {
    const nodeAnswers = this.options.subgenerators.node
    let classArchetype = this.fs.read(path.resolve(TRAILS_TEMPLATE, 'index.js'))
    let classUpdated = Util.getUpdatedTrailpackClass(classArchetype, nodeAnswers.name)

    this.fs.write(this.destinationPath('index.js'), classUpdated)
  },
};
