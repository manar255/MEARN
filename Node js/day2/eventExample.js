

const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('userLoggedIn', (username) => {
    console.log(`User logged in: ${username}`);
});


emitter.emit('userLoggedIn', 'user1');