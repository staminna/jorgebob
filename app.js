var express = require('express');
var bodyParser = require('body-parser');
var product = require('./routes/product'); // Imports routes for the products
var app = express();
var mongoose = require('mongoose'); // Set up mongoose connection

var dev_db_url = 'mongodb://localhost/ProductBob';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/check', product);


var port = 3002;

app.listen(port, () => {
    console.log('Server is up on port numbner ' + port);
});
