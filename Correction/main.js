const e01 = require('./e01')
const e02 = require('./e02')
const e03 = require('./e03')
const e04 = require('./e04')
const e05 = require('./e05')
const e06 = require('./e06')
const e07 = require('./e07')
const e08 = require('./e08')
const e09 = require('./e09')
const e10 = require('./e10')

// Get the current dirname
//console.log('e01 :', e01())

//const filename = process.argv[2]
// Get File extension
//console.log('e02: ', e02(filename))

// Display File Content Synchronously
//console.log('e03: ')
//e03(filename)

// Display File Content Asynchronously
//console.log('e04: ')
//e04(filename)

// const content = process.argv[3]
// Create a file with content
// e05(filename, content)

// Delete a file 
// e06(filename)

// e07(filename)

//e08(filename)

//const permission = process.argv[3]
//e09(filename, permission)

const source = process.argv[2]
const target = process.argv[3]
e10(source, target)