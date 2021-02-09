const Express = require('express');
const bodyParser = require('body-parser') 
var cors = require('cors')

const router = require('./router/router');
const { urlencoded } = require('express');

const app = Express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(router);
app.listen(3000);