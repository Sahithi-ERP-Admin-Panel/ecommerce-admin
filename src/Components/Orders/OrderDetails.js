import React from 'react';

const OrderDetails = ({ details }) => {
    debugger
    return (
        <div>
            <h5>Order Details</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Part No</th>
                        <th>PO</th>
                        <th>Shipping Method</th>
                        <th>Qty</th>
                        <th>Status</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    details.map(orderItem => (
                        <tr key={orderItem.revision_id}>
                            <td>{orderItem.prcpart || 'N/A'}</td>
                            <td>{orderItem.customerpo || 'N/A'}</td>
                            <td>{orderItem.customerpo || 'N/A'}</td>
                            <td>{orderItem.oorderQty || 'N/A'}</td>
                            <td>{orderItem.status || 'N/A'}</td>
                            <td>{orderItem.shipto_countryid || 'N/A'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default OrderDetails;
