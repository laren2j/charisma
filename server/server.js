// server.js

"use strict";
// call the packages we need
require('dotenv').config();
const express       = require('express');
const mongoose      = require('mongoose');
const bodyParser    = require('body-parser');
const app           = express();

const mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {
    useMongoClient: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// ROUTES FOR OUR API
// =============================================================================
const router = express.Router();   

// test route to make sure everything is working (accessed at GET http://localhost:8080)
app.get('/', function(req, res) {
    res.json({ message: 'Wellcome to charisma server' });   
});

// DialogFlow API(accessed at POST http://localhost:8080/api/)
app.post('/api/', function(req, res) {
    const msg = req.body.msg;
});

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Charisma server runs on ' + port);


