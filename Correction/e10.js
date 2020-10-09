const fs = require('fs')
const path = require('path')

function copyFile(source, target) {
  let targetFile = target
  const content = fs.readFileSync(source, 'utf-8')

  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source)) 
    }
  }

  fs.writeFileSync(targetFile, content)
}

function copyFolder(source, target) {
  // Check if target folder exist
  let targetFolder = target
  if (path.basename(source) !== source) {
    targetFolder = path.join(target, path.basename(source))
  }

  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder)
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    const files = fs.readdirSync(source)

    files.forEach(filename => {
      const currentSource = path.join(source, filename)

      if (fs.lstatSync(currentSource).isFile()) {
        copyFile(currentSource, targetFolder)
      } else if (fs.lstatSync(currentSource).isDirectory()) {
        copyFolder(currentSource, targetFolder)
      }
    })
  }
}

module.exports = copyFolder