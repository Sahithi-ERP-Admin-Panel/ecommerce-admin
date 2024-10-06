const express = require('express');
const router = express.Router();
const axios = require('axios');

// Example: Get all products
router.get('/getStudentDetails', async (req, res) => {
  try {
    const jsonString = req.query; // Get query parameters from the request

   
    console.log(jsonString);
    const springApiUrl = `http://192.168.1.100:8080/StudentServices/getStudentDetails?studentDetails=${jsonString}`;

    // Fetch student data from Spring API
    const response = await axios.get(springApiUrl);

    // Send response data back to client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching student data:', error.message);
    res.status(500).json({ message: 'Error fetching student data', error: error.message });
  }
});


router.post('/saveStudent', async (req, res) => {
    try {
      const data = req.body; 
      //console.log('Request body:', data); // Log the incoming data
      const response = await axios.post('http://192.168.1.100:8080/StudentServices/CreateStudent', data); // Adjust endpoint as needed
     // console.log('Response from Spring API:', response.data);
      res.json(response.data);
    } catch (error) {
      console.error('Error calling Spring API:', error.message);
      res.status(500).json({ message: 'Error calling Spring API', error: error.message });
    }
});

module.exports = router;
