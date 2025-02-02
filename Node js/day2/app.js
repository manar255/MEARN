// import {add,subtract,multiply,divide}from './mathOperations.js';
const mathOperations = require('./mathOperations.js');
const logger = require('./logger.js');
const fileEvents = require('./fileEvents.js');
const eventExample = require('./eventExample.js');

console.log(mathOperations.add(10, 20));
console.log(mathOperations.subtract(10, 20));
console.log(mathOperations.multiply(10, 20));
console.log(mathOperations.divide(10, 20));
// console.log(mathOperations.divide(10,0)); 

logger.info("This is an information about the app");
logger.error("This is an error about the app");
logger.warn("This is a warning about the app");

//express server



const express = require('express');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});
app.get('/', (req, res) => {
    res.send('Hello, World!');
});
//rest api
app.use('/users', require('./routes/users.js'));


//upload files
const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'uploads');
        },
        filename: (req, file, cb) => {
            cb(null, Date.now() + '-' + file.originalname);
        },
    })
})
app.post('/assets/download', upload.single('image'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log(req.file);
    res.send('File uploaded');
})

//app listening
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('server is running in http://localhost:3000');
});


