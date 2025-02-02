// Each method should log messages with a corresponding label and timestamp. 

// Use this module in a script app.js to log some sample messages. 

let info = (message) => {
    console.log(`INFO: ${message} at ${new Date()}`);
}

let error = (message) => {
    console.log(`ERROR: ${message} at ${new Date()}`);
}

let warn=(message) =>{
    console.log(`WARNING: ${message} at ${new Date()}`);
}
module.exports = { info, error, warn };