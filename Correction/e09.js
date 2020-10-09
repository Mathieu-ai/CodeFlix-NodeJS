const fs = require('fs')

module.exports = function(filename, permission) {
  fs.chmodSync(filename, permission)
}