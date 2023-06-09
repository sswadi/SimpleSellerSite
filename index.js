const express = require('express');//requiring express 
const app = express(); 
const port = 8000; //setting up port
const db = require('./config/mongoose');
const expressLayouts = require('express-ejs-layouts'); ////requrining ejs layouts for partials and layouts
const path = require('path');

// multer is a middleware used to upload files to DB
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req,file,cb) =>{
        cb(null, '/assets/images');
    },
    filename: (req,file,cb) =>{
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname) ); //we are trying grab the original name
    },
});
const upload = multer({storage: storage}); //multer is an object consisting of various methodss

app.use(express.urlencoded({ extended: true }));


app.use(express.static('./assets'));

app.use(expressLayouts); //saying out app to use expressLayouts 

//if there are any script tags and style tages within subpages(ie. non layout pages/header/footer), then whle rendering it'll be put into layout
app.set('layout extractStyles', true); 
app.set('layout extractScripts', true);


//setting up views engine as ejs
app.set('view engine', 'ejs'); 
app.set('views', './views');


app.use('/', require('./routes'));


app.listen(port, function(err){
    if(err){
        console.log('Error connecting to the express server ');
    }
    console.log(`Successfully connected to the server at port : ${port}`);
});