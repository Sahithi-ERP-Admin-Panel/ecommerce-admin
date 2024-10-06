const express = require('express');
const router = express.Router();
const axios = require('axios');

// Example: Get all products
router.get('/featchOrderData', async (req, res) => {
  try {
    const springApiUrl = `https://gigaflightinc.cetecerp.com/api/order/?preshared_token=oOmRx58%3B-CDo9HbPX`;
    const response = await axios.get(springApiUrl);
    //console.log('response:::',response);
    // Send response data back to client
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching student data:', error.message);
    res.status(500).json({ message: 'Error fetching OrderData data', error: error.message });
  }
});

module.exports = router;