const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var productController = require('./controllers/productController')

var app = express();
app.use(bodyParser.json());
//app.use(cors({ origin: 'http://localhost:4200/vendor/add' }));
app.use(cors());

app.listen(3000, () => console.log('Server started at port : 3000'));

app.use('/products',productController);