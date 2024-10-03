import messages from '../../statics/messages.json'
const production = ()=>{
    return(
        <div className="box-body border b-white rounded-2">        
        <h4 className="p-2 m-0 border-bottom">{messages.production_receiving_label}</h4>
        <div className="row p-2">
            <div className="col-1 d-flex justify-content-start align-items-bottom ">
                <select className="px-3 py-1 border rounded-1 d-inline">
                    <option value="10">10</option>
                </select>
            </div>
            <div className="col-8"></div>
            <div className="col-3"><input type="text" className="form-control" placeholder={messages.search_label}/></div>
            <div className='col-12 py-2'>
                <table class="table table-striped border rounded">
                    <thead>
                        <tr>
                            <th className="text-center">{messages.sno_lable}</th>
                            <th className="text-center">{messages.po_no_label}</th>
                            <th className="text-center">{messages.line_no_label}</th>
                            <th className="text-center">{messages.gf_label}</th>
                            <th className="text-center">{messages.gw_label}</th>
                            <th className="text-center">{messages.qty_received_label}</th>
                            <th className="text-center">{messages.dockdates_label}</th>
                            <th className="text-center">{messages.notes_label}</th>
                            <th className="text-center">{messages.est_shipdate_label}</th>
                            <th className="text-center">{messages.est_shipqty_label}</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                            <td>abc</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='col-12 py-2'>
            <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        
                                        <li class="page-item rounded-start-1"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#"><i class='fas fa-greater-than'></i></a>
                                        </li>
                                    </ul>
                                </nav>
            </div>
        </div>
        
        </div>
    )
}

export default production;