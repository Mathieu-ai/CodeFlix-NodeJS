const fs = require('fs')

var arg = process.argv[2]

if (!arg) // ! = not => donc pas, (!true) = false; vice versa
    return;

if (!fs.existsSync(arg)) {
    fs.createReadStream(`${arg}`).pipe(fs.createWriteStream(`File: ${arg} successfully duplicated! `));
    console.log(`File: ${arg} successfully duplicated! `)
    return
}  

var stat = fs.lstatSync(arg)

if (stat.isFile()) {
    fs.createReadStream(`${arg}`).pipe(fs.createWriteStream(`${arg}.copy`));
    console.log(`File: ${arg} successfully duplicated! `)
}

else if(stat.isDirectory()) {
    fs.createReadStream(`${arg}`).pipe(fs.createWriteStream(`${arg}.copy`));
    console.log(`File: ${arg} successfully duplicated! `)
}