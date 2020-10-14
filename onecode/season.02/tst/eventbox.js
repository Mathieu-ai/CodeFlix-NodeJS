const events = require('events')

function empty() {
    var eventEmitter = new events.EventEmitter();
    eventEmitter.addListener('hi', () => console.log("hi") );
    eventEmitter.emit('hi');
}

module.exports = empty()




