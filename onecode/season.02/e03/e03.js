const fs = require('fs')
const remov = require('C:/Users/Mathieu-ADMIN/Pictures/Efrei/JS/Codeflix/Correction/e05.js')

var arg = process.argv[2]

if (!arg) // ! = not => donc pas, (!true) = false; vice versa
    return;

    else if (!fs.existsSync(arg)) {
    console.log(`I don't know if you know that I can't duplicate things that don't exist `)
    return
}  

var stat = fs.lstatSync(arg)

if (stat.isFile()) {
    fs.createReadStream(`${arg}`).pipe(fs.createWriteStream(`${arg}.copy`));
    console.log(`File: ${arg} successfully duplicated! `)
}

else if(stat.isDirectory()) {
    console.log(`I can't duplicate a directory :( `)
}
