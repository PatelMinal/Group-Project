const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api');

const app = express();
mongoose.connect('mongodb://localhost/harrypotternames');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', routes);

const port = 3002;


app.listen(port, () => console.log('app listening on port ${port}!'));
