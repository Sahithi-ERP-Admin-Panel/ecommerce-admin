import axios from 'axios';
import $ from 'jquery';
const OrderContext = () => {
    const orderFetch = async () => {
        try {
            const response = await axios.get("http://localhost:5000/orderService/featchOrderData");
           // console.log(response.data);
           if(response.status !== 200) throw new Error(`Can't open  with status ${response.status}`);
                return response.data; 




        } catch (err) {
            console.error("Fetch error:", err);
            throw err; 
        }
    };

    const fetchOrderDetails = async (orderId) => {
        try {
            debugger
            const response = await axios.get(`http://localhost:5000/orderService/order?orderId=${orderId}`);
            if (response.status !== 200) throw new Error(`Can't open with status ${response.status}`);
            return response.data;
        } catch (err) {
            console.error(`Error fetching details for order ID ${orderId}:`, err);
            throw err;
        }
    };

    return { orderFetch,fetchOrderDetails }; 
};

export default OrderContext;


// import axios from 'axios';

// const OrderContext = () => {
//     const fetchOrders = async (page, itemsPerPage, searchTerm, index) => {
//         try {
//             const response = await axios.get("http://localhost:5000/orderService/fetchOrderData", {
//                 params: {
//                     page,
//                     maxRecords: itemsPerPage,
//                     searchTerm,
//                     index  // Include the index here
//                 }
//             });
//             return response.data;
//         } catch (err) {
//             console.error("Fetch error:", err);
//             throw err;
//         }
//     };
    
// };

//export default OrderContext;

