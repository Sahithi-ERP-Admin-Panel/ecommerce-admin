const express = require('express');
const router = express.Router();
const axios = require('axios');
const api = require('../api.json');

router.get('/productionDetailsFeatch', async (req, res) => {
    try {
  
      const index = parseInt(req.query.index, 10) || 0;
      const maxRecords = parseInt(req.query.maxRecords, 10) || 10;
      const searchTerm = req.query.searchTerm || ''; 
      const springApiUrl = `${api.server_host}${api.po_featch}?preshared_token=${api.auth_token}`;
  
      const response = await axios.get(springApiUrl);
      if (Array.isArray(response.data)) {
        let filteredData = response.data;
        // if (searchTerm) {
        //   filteredData = filteredData.filter(order =>
        //     order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        //     order.ordernum.includes(searchTerm) ||
        //     order.closed.toString() === searchTerm ||
        //     order.ordered_on.includes(searchTerm) ||
        //     order.total_resale.toString().includes(searchTerm) ||
        //     order.buyer.toLowerCase().includes(searchTerm.toLowerCase())
        //   );
        // }
        const processedData = filteredData.slice(index, index + maxRecords);
        const detailedDataPromises = processedData.map(production => featchProductionById(production.id));
        const detailedData = await Promise.all(detailedDataPromises);
        const finalData = {
            production : detailedData,
            totalRecords:response.data.length
        }
        res.json(finalData);
      } else {
        res.status(400).json({ message: 'Expected an array of order data' });
      }
      
    } catch (error) {
      console.error('Error fetching order data:', error.message);
      res.status(500).json({ message: 'Error fetching order data', error: error.message });
    }
  });
  
  // Fetch order details by ID
  const featchProductionById = async (productionId) => {
    const springApiUrl = `${api.server_host}${api.po_featch}/${productionId}?preshared_token=${api.auth_token}`;
    const response = await axios.get(springApiUrl);
    const data = response.data;
    return data;
  };

  router.get('/getVendors', async (req, res) => {
    try{
      const springApiUrl = `${api.server_host}${api.vendor_api}?preshared_token=${api.auth_token}`;
      const response = await axios.get(springApiUrl);
      const data = response.data;
      return res.json(data);

    } catch (error) {
      console.error('Error fetching order data:', error.message);
      res.status(500).json({ message: 'Error fetching order data', error: error.message });
    }
  });
  
module.exports = router;