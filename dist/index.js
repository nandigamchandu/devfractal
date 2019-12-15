
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./technoidentity-devfractal.cjs.production.min.js')
} else {
  module.exports = require('./technoidentity-devfractal.cjs.development.js')
}
