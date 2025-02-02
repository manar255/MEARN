
// Event-Based Chat System (CLI) 
 
const events = require('events');
const eventEmitter = new events.EventEmitter();



eventEmitter.on('messageReceived', (message) => {
    console.log(`Message Received: ${message}`);
});

eventEmitter.on('userJoined', (username) => {
    console.log(`User Joined: ${username}`);
});

eventEmitter.on('messageSent', (message) => {
    console.log(`Message Sent: ${message}`);
}
);
switch (process.argv[2]) {
    case 'receive':
        eventEmitter.emit('messageReceived', process.argv[3]);
        break;
    case 'join':
        eventEmitter.emit('userJoined', process.argv[3]);
        break;
    case 'send':
        eventEmitter.emit('messageSent', process.argv[3]);
        break;
    default:
        console.log('Invalid command');
}
