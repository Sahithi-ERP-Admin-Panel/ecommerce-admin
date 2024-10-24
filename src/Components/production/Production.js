import messages from '../../statics/messages.json';
import receiveContext from '../../context/ReceiveContext';
import { useState, useEffect } from 'react';
import countriesData from '../../statics/countries.json';
import shipmentData from '../../statics/shipmentsData.json';
import statuses from '../../statics/status.json';

const Production = () => {
    const { productionDetailsFeatch } = receiveContext();
    const [productionData, setProductionData] = useState([]);
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchProduction = async (index, maxRecords, search) => {
        setLoading(true);
        const production = await productionDetailsFeatch(index, maxRecords, search);
        debugger
        setProductionData(production.production);
        setTotalRecords(production.totalRecords);
        setLoading(false);
    };

    useEffect(() => {
        fetchProduction((currentPage - 1) * itemsPerPage, itemsPerPage, searchTerm);
    }, [currentPage, itemsPerPage]);

    const totalPages = Math.ceil(totalRecords / itemsPerPage);

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    const searchProduction = (value) => {
        setSearchTerm(value);
        setCurrentPage(1); // Reset to first page on new search
    };

    const getCountryNameById = (id) => {
        const country = countriesData.find((country) => country.Id == id);
        return country ? country.Country_Name : 'N/A';
    };

    const getShipmentMethodById = (id) => {
        const shipment = shipmentData.find((ship) => ship.Id == id);
        return shipment ? shipment.MethodOfShipment : 'N/A';
    };

    const getStatusById = (id) => {
        const status = statuses.find((ship) => ship.Id == id);
        return status ? status.status : 'N/A';
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            fetchProduction(0, 10, searchTerm);
        } else if (event.key === 'Backspace') {
            fetchProduction(0, 10, '');
        }
    };

    return (
        <div className="box-body border b-white rounded-2">
            <h4 className="p-2 m-0 border-bottom">{messages.production_receiving_label}</h4>
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
                <div className="col-8"></div>
                <div className="col-3">
                    <input
                        type="text"
                        className="form-control"
                        id="search"
                        placeholder={messages.search_label}
                        value={searchTerm}
                        onChange={(e) => searchProduction(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                </div>
                <div className="col-12 py-2">
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
                                    {/* <th className="text-center">{messages.sno_lable}</th> */}
                                    {/* <th className="text-center">{messages.line_no_label}</th>
                                    <th className="text-center">{messages.po_no_label}</th>
                                    <th className="text-center">{messages.gf_label}</th>
                                    <th className="text-center">{messages.gw_label}</th>
                                    <th className="text-center">{messages.qty_received_label}</th>
                                    <th className="text-center">{messages.dockdates_label}</th>
                                    <th className="text-center">{messages.notes_label}</th>
                                    <th className="text-center">{messages.est_shipdate_label}</th>
                                    <th className="text-center">{messages.est_shipqty_label}</th> */}

                                    <th className="text-center">{messages.po_label}</th>
                                    <th className="text-center">{messages.vendor_label}</th>
                                    <th className="text-center">{messages.pn_label}</th>
                                    <th className="text-center">{messages.priority_level_label}</th>
                                    <th className="text-center">{messages.dockdate_label}</th>
                                    <th className="text-center">{messages.status_label}</th>
                                    <th className="text-center w-25">{messages.comments_label}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productionData.length > 0 ? (
                                    productionData.map((produ, productionIndex) =>
                                        produ.po_lines.length > 0 ? (
                                            produ.po_lines.map((line, lineIndex) => (
                                                // <tr key={`${produ.id}-${lineIndex}`}>
                                                //     {/* <td>1</td> */}
                                                //     <td className='text-center'>{line.linenum}</td>
                                                //     <td className='text-center'>{produ.ponum}</td>
                                                //     <td>abc</td>
                                                //     <td>abc</td>
                                                //     <td>abc</td>
                                                //     <td>abc</td>
                                                //     <td>abc</td>
                                                //     <td>abc</td>
                                                //     <td className="text-center">
                                                //         <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">
                                                //             In-Process
                                                //         </a>
                                                //     </td>
                                                // </tr>
                                                <tr key={`${produ.id}-${lineIndex}`}>
                                                    {/* <td>1</td> */}
                                                    <td className='text-center'>{produ.ponum}</td>
                                                    <td>{produ.vennum}</td>
                                                    <td>{line.linenum}</td>
                                                    <td>abc</td>
                                                    <td>abc</td>
                                                    <td>{line.status}</td>
                                                    <td></td>
                                                    {/* <td>{produ.comment}</td> */}
                                                    {/* <td>abc</td>
                                                    <td className="text-center">
                                                        <a className="p-1 px-2 text-decoration-none text-light bg-success rounded">
                                                            In-Process
                                                        </a>
                                                    </td> */}
                                                </tr>
                                            ))
                                        ) : (
                                            <></>
                                        )
                                    )
                                ) : (
                                    <tr>
                                        <td colSpan="9" className="text-center">
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

export default Production;
