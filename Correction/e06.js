const fs = require('fs')

module.exports = function(filename) {
  fs.unlink(filename, () => {
    console.log(`File ${filename} successfully removed!`)
  })
}