const fs = require("fs")

module.exports = function(filename) {
  fs.readFile(filename, 'utf8', (error, data) => {
    console.log('e04: ',data)
  })
}
