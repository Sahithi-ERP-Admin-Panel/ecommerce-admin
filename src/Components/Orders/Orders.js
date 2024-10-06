import messages from '../../statics/messages.json';
import orderContext from '../../context/OrderContext';
import { useEffect, useState } from 'react';

const Orders = () => {
    const { orderFetch } = orderContext(); // Ensure you're calling the context function
    const [orderData, setOrderData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // Current page
    const [itemsPerPage, setItemsPerPage] = useState(10); // Items per page
    const [searchTerm, setSearchTerm] = useState(''); // Search term

    useEffect(() => {
        const fetchOrders = async () => {
            const orders = await orderFetch();
            setOrderData(orders);
        };

        fetchOrders(); // Call the async function
    }, [orderFetch]);

    // Filter orders based on the search term
    const filteredOrders = orderData.filter(order =>
        order.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.id.toString().includes(searchTerm) // Include other fields as needed
    );

    // Calculate the indices of the first and last items for the current page
    const indexOfLastOrder = currentPage * itemsPerPage;
    const indexOfFirstOrder = indexOfLastOrder - itemsPerPage;
    const currentOrders = filteredOrders.slice(indexOfFirstOrder, indexOfLastOrder); // Get the orders for the current page

    // Handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate total orders and current range
    const totalOrders = filteredOrders.length;
    const rangeStart = indexOfFirstOrder + 1;
    const rangeEnd = indexOfLastOrder > totalOrders ? totalOrders : indexOfLastOrder;

    return (
        <div className="box-body border b-white rounded-2">
            <h4 className="p-2 m-0 border-bottom">Orders</h4>
            <div className="row p-2">
                <div className="col-1 d-flex justify-content-start align-items-bottom ">
                    <select
                        className="px-3 py-1 border rounded-1 d-inline"
                        value={itemsPerPage}
                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                    >
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="col-8"></div>
                <div className="col-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder={messages.search_label}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                    />
                </div>
                <div className='col-12 py-2'>
                    <table className="table table-striped border rounded">
                        <thead>
                            <tr>
                                <th className="text-center">{messages.sno_lable}</th>
                                <th className="text-center">{messages.order_no_label}</th>
                                <th className="text-center">{messages.customer_no_label}</th>
                                <th className="text-center">{messages.po_no_label}</th>
                                <th className="text-center">{messages.shipping_date_label}</th>
                                <th className="text-center">{messages.shipping_method_label}</th>
                                <th className="text-center">{messages.part_number_label}</th>
                                <th className="text-center">{messages.quantity_label}</th>
                                <th className="text-center">{messages.comments_label}</th>
                                <th className="text-center">{messages.status_label}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentOrders.length > 0 ? (
                                currentOrders.map((order, index) => (
                                    <tr key={order.id}>
                                        <td>{index + 1 + indexOfFirstOrder}</td>
                                        <td>{order.id}</td>
                                        <td>{order.customer_name}</td>
                                        <td></td>
                                        <td>{order.ordered_on}</td>
                                        <td>abc</td>
                                        <td>abc</td>
                                        <td>abc</td>
                                        <td>abc</td>
                                        <td className="text-center">
                                            <a className="p-1 px-2 text-decoration-none text-light bg-success rounded" p-2="">In-Process</a>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="10" className='text-center'>No Orders found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                
                <div className='col-12 py-2'>
                    <nav aria-label="Page navigation example">
                        <span>
                            {rangeStart} - {rangeEnd} of {totalOrders}
                        </span>
                        <ul className="pagination justify-content-end">
                            {Array.from({ length: Math.ceil(totalOrders / itemsPerPage) }, (_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <a
                                        className="page-link"
                                        href="#"
                                        onClick={() => handlePageChange(index + 1)}
                                    >
                                        {index + 1}
                                    </a>
                                </li>
                            ))}
                            <li className="page-item">
                                <a className="page-link" href="#" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Orders;
