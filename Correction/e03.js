const fs = require('fs')

module.exports = function(filename) {
  console.log(fs.readFileSync(filename, 'utf8'))
}
