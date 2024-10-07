const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Import and use service routes
const studentServices = require('./controls/studentServices');
const orderService = require('./controls/orderService');

app.use('/studentService', studentServices);
app.use('/orderService', orderService);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
