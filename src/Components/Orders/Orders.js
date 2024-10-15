
// import React from 'react';
// import messages from '../../statics/messages.json';
// import orderContext from '../../context/OrderContext';
// import { useEffect, useState } from 'react';
// import OrderDetails from './OrderDetails';

// const Orders = () => {
//     const { orderFetch, fetchOrderDetails } = orderContext();
//     const [orderData, setOrderData] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(10);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [expandedOrderId, setExpandedOrderId] = useState(null);
//     const [expandedOrderDetails, setExpandedOrderDetails] = useState({});

//     useEffect(() => {
//         const fetchOrders = async () => {
//             const orders = await orderFetch();
//             setOrderData(orders);
//         };
//         fetchOrders();
//     }, [orderFetch]);

//     // Filter orders based on the search term
//     const filteredOrders = orderData.filter(order =>
//         order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         order.id.toString().includes(searchTerm)
//     );

//     // Calculate the indices of the first and last items for the current page
//     const indexOfLastOrder = currentPage * itemsPerPage;
//     const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
//     const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     // Fetch order details when expanding an order row
//     const fetchOrder = async (orderId) => {
//         const details = await fetchOrderDetails(orderId);
//         setExpandedOrderDetails(prevDetails => ({
//             ...prevDetails,
//             [orderId]: details, // Store details for the specific order
//         }));
//     };

//     const handleExpand = async (orderId) => {
//         if (expandedOrderId === orderId) {
//             setExpandedOrderId(null);
//         } else {
//             setExpandedOrderId(orderId);
//             // Only fetch details if not already fetched
//             if (!expandedOrderDetails[orderId]) {
//                 await fetchOrder(orderId);
//             }
//         }
//     };

//     const totalOrders = filteredOrders.length;
//     const rangeStart = indexOfFirstOrder + 1;
//     const rangeEnd = indexOfLastOrder > totalOrders ? totalOrders : indexOfLastOrder;

//     return (
//         <div className="box-body border b-white rounded-2">
//             <h4 className="p-2 m-0 border-bottom">Orders</h4>
//             <div className="row p-2">
//                 <div className="col-1 d-flex justify-content-start align-items-bottom">
//                     <select
//                         className="px-3 py-1 border rounded-1 d-inline"
//                         value={itemsPerPage}
//                         onChange={(e) => setItemsPerPage(Number(e.target.value))}
//                     >
//                         <option value="10">10</option>
//                         <option value="20">20</option>
//                         <option value="50">50</option>
//                     </select>
//                 </div>
//                 <div className="col-8"></div>
//                 <div className="col-3">
//                     <input
//                         type="text"
//                         className="form-control"
//                         placeholder={messages.search_label}
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                     />
//                 </div>
//                 <div className="col-12 py-2 overflow-auto">
//                     <table className="table table-striped border rounded">
//                         <thead>
//                             <tr>
//                                 <th className="text-center">{messages.sno_lable}</th>
//                                 <th className="text-center">{messages.order_no_label}</th>
//                                 <th className="text-center">{messages.customer_no_label}</th>
//                                 <th className="text-center">{messages.po_no_label}</th>
//                                 <th className="text-center">{messages.shipping_date_label}</th>
//                                 <th className="text-center">{messages.shipping_method_label}</th>
//                                 <th className="text-center">{messages.part_number_label}</th>
//                                 <th className="text-center">{messages.quantity_label}</th>
//                                 <th className="text-center">{messages.comments_label}</th>
//                                 <th className="text-center">{messages.status_label}</th>
//                                 <th className="text-center">{messages.action_label}</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {currentOrders.length > 0 ? (
//                                 currentOrders.map((order, index) => (
//                                     <React.Fragment key={order.id}>
//                                         <tr>
//                                             <td>{index + 1 + indexOfFirstOrder}</td>
//                                             <td>{order.id}</td>
//                                             <td>{order.customer_name}</td>
//                                             <td></td>
//                                             <td>{order.ordered_on}</td>
//                                             <td>abc</td>
//                                             <td>abc</td>
//                                             <td>abc</td>
//                                             <td>abc</td>
//                                             <td className="text-center">
//                                                 <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">In-Process</a>
//                                             </td>
//                                             <td className="text-center">
//                                                 <button className='btn ' onClick={() => handleExpand(order.id)}>
//                                                     {expandedOrderId === order.id ? <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>}
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                         {expandedOrderId === order.id && expandedOrderDetails[order.id] && (
//                                             <tr>
//                                                 <td colSpan="11">
//                                                     <OrderDetails details={expandedOrderDetails[order.id]} />
//                                                 </td>
//                                             </tr>
//                                         )}
//                                     </React.Fragment>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="10" className="text-center">No Orders found</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//                 <div className="col-12 py-2">
//                     <nav aria-label="Page navigation example">
//                         <span>
//                             {rangeStart} - {rangeEnd} of {totalOrders}
//                         </span>
//                         <ul className="pagination justify-content-end">
//                             {Array.from({ length: Math.ceil(totalOrders / itemsPerPage) }, (_, index) => (
//                                 <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                     <a
//                                         className="page-link"
//                                         href="#"
//                                         onClick={() => handlePageChange(index + 1)}
//                                     >
//                                         {index + 1}
//                                     </a>
//                                 </li>
//                             ))}
//                             <li className="page-item">
//                                 <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Orders;
import React, { useEffect, useState } from 'react';
import messages from '../../statics/messages.json';
import orderContext from '../../context/OrderContext';
import OrderDetails from './OrderDetails';
import countriesData from '../../statics/countries.json';
import shipmentData from '../../statics/shipmentsData.json';
import statuses from '../../statics/status.json'
const Orders = () => {
    const { orderFetch } = orderContext();
    const [orderData, setOrderData] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [expandedRows, setExpandedRows] = useState([]);

    const fetchOrders = async (index, maxRecords, search) => {
        setLoading(true);
        const orders = await orderFetch(index, maxRecords, search);
        setOrderData(orders.order);
        setTotalRecords(orders.totalRecords);
        setLoading(false);
    };

    useEffect(() => {
        fetchOrders((currentPage - 1) * itemsPerPage, itemsPerPage, searchTerm);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const searchOrder = (value) => {
        setSearchTerm(value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const toggleRowExpansion = (orderId) => {
        setExpandedRows(prev => 
            prev.includes(orderId) ? prev.filter(id => id !== orderId) : [...prev, orderId]
        );
    };

    const getCountryNameById = (id) => {
        const country = countriesData.find(country => country.Id == id);
        return country ? country.Country_Name : 'N/A';
    };

    const getShipmentMethodById = (id) => {
        const shipment = shipmentData.find(ship => ship.Id == id);
        return shipment ? shipment.MethodOfShipment : 'N/A';
    };
    const getStatusById = (id) => {
        const status = statuses.find(ship => ship.Id == id);
        return status ? status.status : 'N/A';
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchOrders(0,10,searchTerm)
        }else if (event.key === 'Backspace') {
            fetchOrders(0,10,'')
        }

      };

    return (
        <div className="box-body border b-white rounded-2">
            <h4 className="p-2 m-0 border-bottom">Orders</h4>
            <div className="row p-2">
                <div className="col-1 d-flex justify-content-start align-items-bottom">
                    <select
                        className="px-3 py-1 border rounded-1 d-inline"
                        value={itemsPerPage}
                        onChange={(e) => {
                            setItemsPerPage(Number(e.target.value));
                            setCurrentPage(1);
                        }}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className='col-8'></div>
                <div className="col-3">
                    <input
                        type="text"
                        className="form-control"
                        id='search'
                        placeholder={messages.search_label}
                        value={searchTerm}
                        onChange={(e) => searchOrder(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className="col-12 py-2 overflow-auto">
                    {loading ? (
                        <div className="text-center vh-50 d-flex justify-content-center align-items-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <table className="table table-striped border rounded">
                            <thead>
                                <tr>
                                    <th className="text-center">{messages.sno_lable}</th>
                                    <th className="text-center">{messages.order_no_label}</th>
                                    <th className="text-center">{messages.customer_no_label}</th>
                                    <th className="text-center">{messages.po_no_label}</th>
                                    <th className="text-center">{messages.shipping_date_label}</th>
                                    <th className="text-center">{messages.shipping_method_label}</th>
                                    <th className="text-center">Country</th>
                                    <th className="text-center">{messages.comments_label}</th>
                                    <th className="text-center">{messages.status_label}</th>
                                    <th className="text-center">{messages.action_label}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.length > 0 ? (
                                    orderData.map((order, index) => (
                                        <React.Fragment key={order.id}>
                                            <tr>
                                                <td className='text-center'>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                                <td className='text-center'><a href={`https://gigaflightinc.cetecerp.com/order/MN${order.ordernum}/view`} target='_blank'>{order.ordernum}</a></td>
                                                <td>{order.custnum}</td>
                                                <td>{order.custponum}</td>
                                                <td>{order.oorderdate}</td>
                                                <td>{getShipmentMethodById(order.shipvia)}</td>
                                                <td>{getCountryNameById(order.shipto_country_id)}</td>
                                                <td></td>
                                                <td className="text-center">
                                                    <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">{getStatusById(order.orderstatus) || 'N/A'}</a>
                                                </td>
                                                <td className="text-center">
                                                    <button
                                                        className="btn btn-link"
                                                        onClick={() => toggleRowExpansion(order.id)}
                                                    >
                                                        {expandedRows.includes(order.id) ? <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 320 512"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"/></svg>}
                                                    </button>
                                                </td>
                                            </tr>

                                            {/* Expanded row details */}
                                            {expandedRows.includes(order.id) && (
                                                <tr>
                                                    <td colSpan="11">
                                                        <OrderDetails details={order.lines} getStatusById={getStatusById} />
                                                    </td>
                                                </tr>
                                            )}
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="11" className="text-center">No Orders found</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
                <div className="col-12 py-2">
                    <nav aria-label="Page navigation example">
                        <span>
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, totalRecords)} of {totalRecords}
                        </span>
                        <ul className="pagination float-end">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>{index + 1}</button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Orders;
