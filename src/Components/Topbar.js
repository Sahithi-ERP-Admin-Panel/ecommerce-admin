import profile from '../statics/images/profile.png'
const TopBar = () => {

    return (
        <>
            <nav class="navbar navbar-expand navbar-transparent bg-transparent px-4">
                {/* <a class="sidebar-toggle js-sidebar-toggle">
                    <i class="hamburger align-self-center"></i>
                </a> */}

                <form class="d-none d-sm-inline-block">
                <div class="input-group input-group-navbar">
                    <input type="text" class="form-control m-0 border rounded-start-3" />
                    <button class="btn border border-start-0 d-flex align-items-center justify-content-center p-0 pe-1 rounded-end-3" type="button" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="p-2 bg-primary rounded-3 text-light"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </button>
                </div>
                </form>



                <div class="navbar-collapse collapse">
                    <ul class="navbar-nav navbar-align">
                    <li class="nav-item border-end">
                        <a class="nav-icon mx-2 p-3 rounded-5 mx-3" style={{background:"white"}} href="#" >
                            <div class="position-relative d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
                                <circle cx="32" cy="32" r="12" fill="gray"></circle>
                                <line x1="32" y1="0" x2="32" y2="12" stroke="gray" strokewidth="4"></line>
                                <line x1="32" y1="64" x2="32" y2="52" stroke="gray" strokewidth="4"></line>
                                <line x1="0" y1="32" x2="12" y2="32" stroke="gray" strokewidth="4"></line>
                                <line x1="64" y1="32" x2="52" y2="32" stroke="gray" strokewidth="4"></line>
                                <line x1="9.64" y1="9.64" x2="16.97" y2="16.97" stroke="gray" strokewidth="4"></line>
                                <line x1="47.03" y1="47.03" x2="54.36" y2="54.36" stroke="gray" strokewidth="4"></line>
                                <line x1="9.64" y1="54.36" x2="16.97" y2="47.03" stroke="gray" strokewidth="4"></line>
                                <line x1="47.03" y1="16.97" x2="54.36" y2="9.64" stroke="gray" strokewidth="4"></line>
                            </svg>
                            </div>
                        </a>
                    </li>
                    <li class="nav-item border-end">
                        <a class="nav-icon  mx-2 p-3 rounded-5 mx-3" style={{background:"white"}} href="#" >
                            <div class="position-relative d-flex justify-content-center align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480">
                                <rect width="640" height="480" fill="#B22234"/>
                                <rect width="640" height="35.38" y="44.6" fill="#FFFFFF"/>
                                <rect width="640" height="35.38" y="130.2" fill="#FFFFFF"/>
                                <rect width="640" height="35.38" y="215.8" fill="#FFFFFF"/>
                                <rect width="640" height="35.38" y="301.4" fill="#FFFFFF"/>
                                <rect width="640" height="35.38" y="387" fill="#FFFFFF"/>
                                <rect width="640" height="35.38" y="472.6" fill="#FFFFFF"/>
                                
                                <g fill="#3C3B6E">
                                    <rect width="244" height="206.8"/>
                                    <g fill="#FFFFFF">
                                    <g id="stars">
                                        <g>
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        <polygon points="12 0 15 8 24 8 16 12 19 20 12 15 5 20 8 12 0 8 9 8" />
                                        </g>
                                    </g>
                                    </g>
                                </g>
                                </svg>

                            </div>
                        </a>
                    </li>
                       
                        <li class="nav-item dropdown rounded-5 ms-3 me-2" style={{background:"white"}}>
                            <a class="nav-icon dropdown-toggle mx-2 p-2" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                                <div class="position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell align-middle"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                    <span class="indicator">4</span>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                                <div class="dropdown-menu-header">
                                    4 New Notifications
                                </div>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-circle text-danger"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                            </div>
                                            <div class="col-10">
                                                <div class="text-dark">Update completed</div>
                                                <div class="text-muted small mt-1">Restart server 12 to complete the update.</div>
                                                <div class="text-muted small mt-1">30m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell text-warning"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                            </div>
                                            <div class="col-10">
                                                <div class="text-dark">Lorem ipsum</div>
                                                <div class="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                                                <div class="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home text-primary"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                            </div>
                                            <div class="col-10">
                                                <div class="text-dark">Login from 192.186.1.8</div>
                                                <div class="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus text-success"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                                            </div>
                                            <div class="col-10">
                                                <div class="text-dark">New connection</div>
                                                <div class="text-muted small mt-1">Christina accepted your request.</div>
                                                <div class="text-muted small mt-1">14h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-menu-footer">
                                    <a href="#" class="text-muted">Show all notifications</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown rounded-5 me-2" style={{background:"white"}}>
                            <a class="nav-icon dropdown-toggle mx-2 p-2" href="#">
                                <div class="position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell align-middle"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                </div>
                            </a>
                        </li>
                        <li class="nav-item dropdown pe-2 border-end" >
                            <a class="nav-icon dropdown-toggle me-2 p-2 px-3 rounded-5" style={{background:"white"}} href="#">
                                <div class="position-relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell align-middle"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                                </div>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                                <div class="dropdown-menu-header">
                                    <div class="position-relative">
                                        4 New Messages
                                    </div>
                                </div>
                                <div class="list-group">
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                            </div>
                                            <div class="col-10 ps-2">
                                                <div class="text-dark">Vanessa Tucker</div>
                                                <div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                                                <div class="text-muted small mt-1">15m ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                {/* <img src="img/avatars/avatar-2.jpg" class="avatar img-fluid rounded-circle" alt="William Harris"> */}
                                            </div>
                                            <div class="col-10 ps-2">
                                                <div class="text-dark">William Harris</div>
                                                <div class="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                                                <div class="text-muted small mt-1">2h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                {/* <img src="img/avatars/avatar-4.jpg" class="avatar img-fluid rounded-circle" alt="Christina Mason"> */}
                                            </div>
                                            <div class="col-10 ps-2">
                                                <div class="text-dark">Christina Mason</div>
                                                <div class="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                                                <div class="text-muted small mt-1">4h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="list-group-item">
                                        <div class="row g-0 align-items-center">
                                            <div class="col-2">
                                                {/* <img src="img/avatars/avatar-3.jpg" class="avatar img-fluid rounded-circle" alt="Sharon Lessman"> */}
                                            </div>
                                            <div class="col-10 ps-2">
                                                <div class="text-dark">Sharon Lessman</div>
                                                <div class="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                                                <div class="text-muted small mt-1">5h ago</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="dropdown-menu-footer">
                                    <a href="#" class="text-muted">Show all messages</a>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-flag dropdown-toggle" href="#" id="languageDropdown" data-bs-toggle="dropdown">
                                {/* <img src="img/flags/us.png" alt="English"> */}
                            </a>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="languageDropdown">
                                <a class="dropdown-item" href="#">
                                    {/* <img src="img/flags/us.png" alt="English" width="20" class="align-middle me-1"> */}
                                    <span class="align-middle">English</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    {/* <img src="img/flags/es.png" alt="Spanish" width="20" class="align-middle me-1"> */}
                                    <span class="align-middle">Spanish</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    {/* <img src="img/flags/ru.png" alt="Russian" width="20" class="align-middle me-1"> */}
                                    <span class="align-middle">Russian</span>
                                </a>
                                <a class="dropdown-item" href="#">
                                    {/* <img src="img/flags/de.png" alt="German" width="20" class="align-middle me-1"> */}
                                    <span class="align-middle">German</span>
                                </a>
                            </div>
                        </li>
                       
                        <li class="nav-item dropdown">
                            <a class="nav-icon dropdown-toggle p-0 py-2" href="#" data-bs-toggle="dropdown">
                                <img src={profile} class="avatar img-fluid rounded" alt="Charles Hall" />
                            </a>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="pages-profile"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user align-middle me-1"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile</a>
                                {/* <a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart align-middle me-1"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg> Analytics</a>
                                <div class="dropdown-divider"></div> */}
                                <a class="dropdown-item" href="pages-settings"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings align-middle me-1"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg> Settings &amp;
                                    Privacy</a>
                                {/* <a class="dropdown-item" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle align-middle me-1"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Help Center</a>
                                <div class="dropdown-divider"></div> */}
                                <a class="dropdown-item" href="#">Log out</a>
                            </div>
                        </li>
                    </ul>
                   
                </div>
            </nav>
        </>
    )
}

export default TopBar;