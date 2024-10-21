import axios from 'axios';
import $ from 'jquery';
const ReceiveContext = () => {
    const productionDetailsFeatch = async (index, maxRecords, searchTerm) => {
        debugger
    try {
        const response = await axios.get("http://localhost:5000/receivingService/productionDetailsFeatch", {
            params: {
                index: index,
                maxRecords: maxRecords,
                searchTerm: searchTerm
            }
        });

        // Check the response status
        if (response.status !== 200) throw new Error(`Can't open with status ${response.status}`);
        
        return response.data;

    } catch (err) {
        console.error("Fetch error:", err);
        throw err;
    }
};


return { productionDetailsFeatch }; 
};

export default ReceiveContext;


