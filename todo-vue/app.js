const Express = require('express');
const Bodyparser = require('body-parser');
const ejs = require('ejs');
const router = require('./router/routes');

const app = Express();

app.set('view engine', 'ejs');

app.use(router);

app.listen(3000);