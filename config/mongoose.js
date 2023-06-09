const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/SimpleSellerSite');

const db = mongoose.connection; //creating an instance(db)

//db.on('error', ...) sets up an error event listener on the db object; so wherever an error event oocurs the following callback function is executed
db.on('error', console.error.bind(console, "Error connecting to DB")); // The console.error function is used to log an error message to the console, and bind is used to set the console object as the context(this) for the function; bind returns a new function


db.once('open', function(){
    console.log('Connected to db : MongoDB');
});

module.exports = db;