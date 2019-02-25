const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/api');


const app = express();

app.use(bodyParser.json());

app.use('/api', routes);

const port = 3002;

app.get('/', (req, res) => res.send({ name: 'Darren' }));
app.listen(port, () => console.log('app listening on port ${port}!'));
