const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const orderService = require('./controls/orderService');
const receivingService = require('./controls/receivingService')

app.use('/orderService', orderService);
app.use('/receivingService', receivingService);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
