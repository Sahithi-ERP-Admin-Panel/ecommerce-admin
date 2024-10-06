import axios from 'axios';
import $ from 'jquery';
const OrderContext = () => {
    const orderFetch = async () => {
        try {
            const response = await axios.get("http://localhost:5000/orderService/featchOrderData");
           // console.log(response.data);
           if(response.status !== 200) throw new Error(`Can't open  with status ${response.status}`);
                return response.data; 

            // let response = await fetch('https://gigaflightinc.cetecerp.com/api/order', {
            //     method: 'GET',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-type':'application/json'
            //     },
            //     body: JSON.stringify({
            //         preshared_token: 'oOmRx58%3B-CDo9HbPX',
            //     })
            // });
    
            // if(response.status !== 200) throw new Error(`Can't open  with status ${response.status}`);
            // return response.json();
            debugger

            // $.ajax({
            //     url: 'https://gigaflightinc.cetecerp.com/api/order', 
            //     type: 'GET',
            //     dataType: 'json', 
            //     data: { 
            //         preshared_token: 'oOmRx58%3B-CDo9HbPX'
            //     }, 
            //     success: function(response) {
            //         debugger
            //         console.log('Success:', response);
            //     },
            //     error: function(xhr, status, error) {
            //         debugger
            //         console.error('Error:', error);
            //     },
            //     complete: function(xhr, status) {
            //         debugger
            //         console.log('Request complete:', status);
            //     }
            // });



        } catch (err) {
            console.error("Fetch error:", err);
            throw err; 
        }
    };

    return { orderFetch }; 
};

export default OrderContext;
