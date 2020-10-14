/*

function ex (toto, titi) {
    console.log(toto)

}

ex('tata')


(toto, titi) => console.log(toto)
*/


var eventEmitter = require('events')
var myEmitter = new eventEmitter()

myEmitter.on('NewFellow', (name) => console.log(`here come's a new pirate ->> ${name}`) )

function withArgs (names) {
    names.forEach( name => myEmitter.emit('NewFellow', name) );
}

withArgs([
    'Luffy',
    'Zorro',
    'Usopp',
    'Robin',
    'Nami',
    'Sanji',
    'Ch0pper'
])