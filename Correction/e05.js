const fs = require('fs')

module.exports = function(filename, content) {
  fs.writeFile(filename, content, () => {
    console.log(`File ${filename} successfully created!`)
  })
}
