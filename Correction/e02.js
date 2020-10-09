const path = require('path')

module.exports = function(filename) {
  return path.extname(filename)
}
