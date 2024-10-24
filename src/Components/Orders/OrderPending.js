import React, { useEffect, useState } from 'react';
import messages from '../../statics/messages.json';
import orderContext from '../../context/OrderContext';
import OrderDetails from './OrderDetails';
import countriesData from '../../statics/countries.json';
import shipmentData from '../../statics/shipmentsData.json';
import statuses from '../../statics/status.json'
const OrderPending = () => {
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

      const getRowStyle = (date) => {
        
        const today = new Date();
        const targetDate = new Date(date);
        const timeDiff = targetDate - today;
        const diffDays =  Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        
        if (diffDays <= -2) {
            return {Style:""};
          } else if (diffDays === 0) {
            return {Style:"display:none"};
          } else if (diffDays <= 1) {
            return {Style:"display:none"};
          }else if (diffDays <= 2) {
            return {Style:"display:none"};
          } else if (diffDays <= 3) {
            return {Style:"display:none"};
          }
        return {}; // Default style
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
                        <table className="table border rounded">
                            <thead>
                                <tr className="bg-light">
                                    <th className="text-center">{messages.line_item}</th>
                                    <th className="text-center">{messages.order_no_label}</th>
                                    <th className="text-center">{messages.customer_name_label}</th>
                                    <th className="text-center">{messages.po_no_label}</th>
                                    <th className="text-center">{messages.part_no}</th>
                                    <th className="text-center">{messages.status_label}</th>
                                    <th className="text-center">{messages.shipping_date_label}</th>
                                    <th className="text-center">{messages.shipping_method_label}</th>
                                    <th className="text-center">{messages.country_label}</th>
                                    <th className="text-center">{messages.comments_label}</th>
                                    <th className="text-center">{messages.order_status_label}</th>
                                    {/* <th className="text-center">{messages.action_label}</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {orderData.length > 0 ? (
                                    orderData.map((order, orderIndex) => (
                                    order.lines.length > 0 ? (
                                        order.lines.map((line, lineIndex) => (
                                        <tr key={`${order.id}-${lineIndex}`} {...getRowStyle(line.orig_shipdate)} className={order.customer.name === 'Internal Account'?'d-none':''}> 
                                            {/* This displays order-specific information once per line */}
                                            <td className='text-center'>
                                            {/* Calculate the serial number (slno) for each row */}
                                            {line.lineitem}
                                            </td>
                                            <td className='text-center'>
                                            <a href={`https://gigaflightinc.cetecerp.com/order/MN${order.ordernum}/view`} target='_blank' rel='noopener noreferrer'>
                                                {order.ordernum}
                                            </a>
                                            </td>
                                            <td>{order.customer.name}</td>
                                            <td>{order.custponum}</td>
                                            <td>{line.prcpart.substring(3) || 'N/A'}</td>
                                            <td>
                                            <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">
                                                {getStatusById(line.status) || 'N/A'}
                                            </a>
                                            </td>
                                            <td>{line.shipdate?line.shipdate:line.orig_shipdate}</td>
                                            <td>{getShipmentMethodById(order.shipvia)}</td>
                                            <td className={getCountryNameById(order.shipto_country_id) !== 'United States'?'bg-dark text-light text-center':'text-center'}>{getCountryNameById(order.shipto_country_id)}</td>
                                            <td></td>
                                            <td className="text-center">
                                            <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">
                                                {getStatusById(order.orderstatus) || 'N/A'}
                                            </a>
                                            </td>
                                        </tr>
                                        ))
                                    ) : (
                                        <tr key={order.id}>
                                        <td colSpan="11" className="text-center">
                                            No Data
                                        </td>
                                        </tr>
                                    )
                                    ))
                                ) : (
                                    <tr>
                                    <td colSpan="14" className="text-center">
                                        No Orders found
                                    </td>
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

export default OrderPending;