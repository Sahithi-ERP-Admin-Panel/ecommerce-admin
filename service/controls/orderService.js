const express = require('express');
const router = express.Router();
const axios = require('axios');
const api = require('../api.json');

// Example: Get all orders
router.get('/featchOrderData', async (req, res) => {
  try {
    const springApiUrl = `${api.server_host}${api.order_fetch}?preshared_token=${api.auth_token}`;
    const response = await axios.get(springApiUrl);
    res.json(response.data);  // Send the fetched order data back to the client
  } catch (error) {
    console.error('Error fetching order data:', error.message);
    res.status(500).json({ message: 'Error fetching order data', error: error.message });
  }
});

// Fetch details for a specific order by ID
router.get('/order', async (req, res) => {
  try {
    const { orderId } = req.query;  // Get orderId from the query params
    const springApiUrl = `${api.server_host}${api.order_fetch}/${orderId}?preshared_token=${api.auth_token}`;
    const response = await axios.get(springApiUrl);
   // console.log('res::::',JSON.stringify(response.data.lines))
    res.json(response.data.lines);  // Send the fetched order details back to the client
  } catch (error) {
    console.error('Error fetching order details:', error.message);
    res.status(500).json({ message: 'Error fetching order details', error: error.message });
  }
});

module.exports = router;



// const express = require('express');
// const router = express.Router();
// const axios = require('axios');
// const api = require('../api.json');  // Import the API configuration

// // Fetch paginated orders and replace a specific order's data with detailed data
// router.get('/fetchOrderData', async (req, res) => {
//   const { page, maxRecords, searchTerm, index } = req.query;  // Get page, maxRecords, searchTerm, and index from request query params
  
//   const pageNum = parseInt(page) || 1;  // Default to page 1 if not provided
//   const recordsPerPage = parseInt(maxRecords) || 10;  // Default to 10 records per page

//   try {
//     // Step 1: Fetch all orders from the service
//     const springApiUrl = `${api.server_host}${api.order_fetch}?preshared_token=${api.auth_token}`;
//     const response = await axios.get(springApiUrl);
//     let orders = response.data;  // Assume the response contains an array of orders

//     // Step 2: Filter orders by searchTerm if provided
//     if (searchTerm) {
//       orders = orders.filter(order => order.someField.toLowerCase().includes(searchTerm.toLowerCase()));  // Replace 'someField' with the relevant field to search
//     }

//     // Step 3: Calculate start and end indices for pagination
//     const startIndex = (pageNum - 1) * recordsPerPage;
//     const endIndex = startIndex + recordsPerPage;
//     const paginatedOrders = orders.slice(startIndex, endIndex);  // Get the specific range

//     // Step 4: Check if index is provided and fetch detailed data for that specific order
//     if (index !== undefined && index >= 0 && index < orders.length) {
//       const orderId = orders[index].id;  // Get the order ID from the specified index
//       try {
//         // Fetch detailed data for the specific order
//         const orderDetailUrl = `${api.server_host}${api.order_fetch}${orderId}?preshared_token=${api.auth_token}`;
//         const orderDetailResponse = await axios.get(orderDetailUrl);
        
//         // Replace the specific order's data with the detailed data in the paginatedOrders
//         const orderIndex = paginatedOrders.findIndex(order => order.id === orderId);
//         if (orderIndex !== -1) {
//           paginatedOrders[orderIndex] = orderDetailResponse.data;  // Replace the order data
//         }
//       } catch (detailError) {
//         console.error(`Error fetching details for order ${orderId}:`, detailError.message);
//         // Optionally handle the error, e.g., log it or return a specific message
//       }
//     }

//     // Step 5: Send the final response with the modified order data
//     res.json({
//       page: pageNum,
//       maxRecords: recordsPerPage,
//       totalOrders: orders.length,
//       orders: paginatedOrders,  // Return the paginated orders with the modified order data
//     });
//   } catch (error) {
//     console.error('Error fetching order data:', error.message);
//     res.status(500).json({ message: 'Error fetching order data', error: error.message });
//   }
// });

// module.exports = router;
