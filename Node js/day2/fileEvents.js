
const EventEmitter = require('events');
const emitter = new EventEmitter();
const fs = require('fs');

emitter.on('fileCreated', (filename) => {
    console.log(`File created: ${filename}`);
});

emitter.on('fileRead', (filename) => {
    console.log(`File read: ${filename}`);
});
emitter.on('fileDeleted', (filename) => {
    console.log(`File deleted: ${filename}`);
});
// Create a file
fs.writeFileSync('example.txt', 'Hello, World!');
emitter.emit('fileCreated', 'example.txt');

// Read the file
let data = fs.readFileSync('example.txt', 'utf8');
emitter.emit('fileRead', 'example.txt');
console.log(data);

// Delete the file
fs.unlinkSync('example.txt');
emitter.emit('fileDeleted', 'example.txt');
