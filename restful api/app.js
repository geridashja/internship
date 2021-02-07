const Express = require('express');
const ejs = require('ejs');

const router = require('./router/router');
const { urlencoded } = require('express');

const app = Express();

//needed in order to get the data from forms
app.use(urlencoded({extended:true}));

app.use(Express.json());
app.set('view engine', 'ejs');

app.listen(3000);

app.use(router);