const Express = require('express');
const ejs = require('ejs');

const router = require('./router/router');
const app = Express();
app.set('view engine', 'ejs');
app.listen(3000);
app.use(router);