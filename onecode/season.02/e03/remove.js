const fs = require('fs')

var arg = process.argv[2]

module.exports = function(arg) {
  fs.unlink(arg, () => {
    console.log(`File ${arg} successfully removed!`)
  })
}
if (!arg) // ! = not => donc pas, (!true) = false; vice versa
    return;

    else if (!fs.existsSync(arg)) {
    console.log(`I don't know if you know that I can't remove things that don't exist `)
    return
}  

var stat = fs.lstatSync(arg)

if (stat.isFile()) {
  fs.unlink(arg, () => {
    console.log(`File ${arg} successfully removed!`)
  })
}

else if(stat.isDirectory()) {
  fs.unlink(arg, () => {
    console.log(`I can only delete files :o  `)
  })
    
}