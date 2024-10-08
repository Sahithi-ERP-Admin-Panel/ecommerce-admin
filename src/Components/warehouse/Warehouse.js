import messages from '../../statics/messages.json'
const warehouse = ()=>{
    return(
        <div className="box-body border b-white rounded-2">        
        <h4 className="p-2 m-0 border-bottom">{messages.warehouse_label}</h4>
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
                            <th className="text-center">{messages.po_label}</th>
                            <th className="text-center">{messages.vendor_label}</th>
                            <th className="text-center">{messages.pn_label}</th>
                            <th className="text-center">{messages.priority_level_label}</th>
                            <th className="text-center">{messages.dockdate_label}</th>
                            <th className="text-center">{messages.status_label}</th>
                            <th className="text-center">{messages.comments_label}</th>
                            
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
                            <td className="text-center"><a class="p-1 px-2 text-decoration-none text-light bg-orange rounded" p-2="">In-Receiving</a></td>
                            
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
                            <td className="text-center"><a class="p-1 px-2 text-decoration-none text-light bg-purple rounded" p-2="">Insepction In-Process</a></td>
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
                            <td className="text-center"><a class="p-1 px-2 text-decoration-none text-light bg-success rounded" p-2="">Completed</a></td>
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
                            <td className="text-center"></td>
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
                            <td className="text-center"></td>
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
                            <td className="text-center"></td>
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

export default warehouse;
