const fs = require('fs')

const path = '.onecode.txt'

try {
  fs.unlinkSync(path)
  //file removed
} catch(err) {
  console.error(err)
}
