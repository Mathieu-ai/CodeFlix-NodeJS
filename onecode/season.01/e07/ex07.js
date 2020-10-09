/*const fs = require('fs')

const dir = 'C:/Users/Mathieu-ADMIN/Pictures/Efrei/JS/Codeflix/onecode/season.01/e07'
const files = fs.readdirSync(dir)

for (const file of files) {
    console.log(`The argument ${file}`)
}
*/

/*
const fs = require('fs')

const dir = 'C:/Users/Mathieu-ADMIN/Pictures/Efrei/JS/Codeflix/onecode/season.01/e07'
const files = fs.readdirSync(dir, { withFileTypes:true })

for (const file of files) {
    if (file.isFile()) {
    const read = fs.readFileSync( file.name, {'encoding':'utf-8'} )
    console.log(read)
  }
  else if (file.isDirectory())
      console.log(`The argument ${file.name}`)
}
*/



const fs = require('fs')

var arg = process.argv[2]

if (!arg) // ! = not => donc pas, (!true) = false; vice versa
    return;

if (!fs.existsSync(arg)) {
    console.log(`The argument [ ${arg} ] is another unix things`);
    return
}  

var stat = fs.lstatSync(arg)

if (stat.isFile())
    console.log(`The argument [ ${arg} ] is a file`)
else if(stat.isDirectory())
    console.log(`The argument [ ${arg} ] is a directory`)

    
