const Express = require('express');
const bodyParser = require('body-parser') 

const router = require('./router/router');
const { urlencoded } = require('express');

const app = Express();

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(router);
app.listen(3000);