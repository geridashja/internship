const express = require('express');
const ejs = require('ejs');
const path = require('path');
const Routes = require('./routes/router');
const request = require('request');
const app = express();

app.set('view engine', 'ejs');

app.listen(3000);
app.use(Routes);

//A simple project which helped me to understand how APIs work and how we can get the data from json format 
//from these APIs

//API taken free from:

// https://rapidapi.com/aldair.sr99/api/world-population?endpoint=apiendpoint_4edc9a8e-1609-4dcc-9c83-aefe45b51a5f