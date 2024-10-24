import { Link } from "react-router-dom"
import logo from '../statics/images/logo.png'
import messages from '../statics/messages.json';
import React, { useState } from 'react';
const SideBar = ({ activeMenu, setActiveMenu ,isSidebarCollapsed,toggleSidebar,handleMenuClick}) => {
	const pdfFile = `/logo.pdf`;
	
	
	
	
	return (
		<>
		{/* <div className={`sidebar-wrapper ${isSidebarCollapsed ? 'active-side-bar-wrapper' : ''}`}> */}
			<nav id="sidebar" class={`sidebar js-sidebar`}>
				<div class="sidebar-content js-simplebar" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: "0px" }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden scroll' }}><div class="simplebar-content" style={{ padding: '0px' }}>
					<div class="sidebar-brand">
						<a href="/dashboard" className="w-75">
						<img src={logo} className="img-fluid"/>
						</a>
						<svg onClick={toggleSidebar} class="toggle p-2 ms-3 rounded-5 bg-secondary text-light" width='35' height='35' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#f5f5f5" d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"/></svg>
						{/* <svg onClick={toggleSidebar} className="toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width='24' height='24'><path d="M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"/></svg>
					 */}
					</div>
					<ul class="sidebar-nav">
						<li class={`sidebar-item ${activeMenu === '/dashboard' || activeMenu === '/ecommercedashboard' || activeMenu === '/crmdashboard' ? 'active' : ''}`}>
							<a href="/dashboard" onClick={() => handleMenuClick('/dashboard')} data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							{/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> */}
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width='16' height='16'>
								<path fill="currentColor" d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z"/>
							</svg>
							{/* <FontAwesomeIcon icon="fa-duotone fa-solid fa-house" style={{color: "#1f38b2",}} /> */}
							<span class="align-middle">{messages.dashoard_label}</span>
							</a>
							<ul id="dashboards" class={`sidebar-dropdown list-unstyled collapse ${activeMenu === '/dashboard' || activeMenu === '/ecommercedashboard' || activeMenu === '/crmdashboard' ? 'show' : ''}`} data-bs-parent="#sidebar" >
								<li class={`sidebar-item ${activeMenu === '/dashboard' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/dashboard')} to="/dashboard">{messages.default_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/ecommercedashboard' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/ecommercedashboard')} to="/ecommercedashboard">{messages.ecommerce_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/crmdashboard' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/crmdashboard')} to="/crmdashboard">{messages.crm_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/orders' || activeMenu === '/orders-pending' || activeMenu === '/orders-completed' ? 'active' : ''}`}>
							<Link class="sidebar-link collapsed" to="/orders" onClick={() => handleMenuClick('/orders')}  data-bs-target="#orders" data-bs-toggle="collapse"  aria-expanded="false">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
								<span class="align-middle">{messages.orders_label}</span>
							</Link>
							<ul id="orders" class={`sidebar-dropdown list-unstyled collapse ${activeMenu === '/orders' || activeMenu === '/orders-pending' || activeMenu === '/orders-completed'  ? 'show' : ''}`} data-bs-parent="#sidebar" >
								<li class={`sidebar-item ${activeMenu === '/orders' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/orders')} to="/orders">{messages.orders_label}</Link></li>
								{/* <li class={`sidebar-item ${activeMenu === '/orders-pending' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/orders-pending')} to="/orders-pending">{messages.order_pending_label}</Link></li> */}
								<li class={`sidebar-item ${activeMenu === '/orders-completed' ?'active':''}`}><Link class="sidebar-link" onClick={() => handleMenuClick('/orders-completed')} to="/orders-completed">{messages.order_completed_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/production' || activeMenu === '/receivingproduction' || activeMenu === '/warehouse' ? 'active' : ''}`}>
							<a href="/receiving" onClick={() => handleMenuClick('/production')} data-bs-target="#receiving" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
								<path fill="currentColor" d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/>
							</svg>
							<span class="align-middle">{messages.receiving_label}</span>
							</a>
							<ul id="receiving" class={`sidebar-dropdown list-unstyled collapse ${activeMenu === '/production' || activeMenu === '/receivingproduction' || activeMenu === '/warehouse' ? 'show' : ''}`} data-bs-parent="#sidebar" >
								{/* <li class="sidebar-item active"><a class="sidebar-link" href="/production" onClick={() => handleMenuClick('/production')}>{messages.production_label}</a></li> */}
								<li class={`sidebar-item ${activeMenu === '/receivingproduction' ?'active':''}`}><Link class="sidebar-link" to="/receivingproduction" onClick={() => handleMenuClick('/receivingproduction')}>{messages.production_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/warehouse' ?'active':''}`}><a class="sidebar-link" href="/warehouse" onClick={() => handleMenuClick('/warehouse')}>{messages.warehouse_label}</a></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/outgoing' || activeMenu === '/sales' || activeMenu === '/accounts' ? 'active' : ''}`}>
							<a href="/outgoing" onClick={() => handleMenuClick('/outgoing')} data-bs-target="#outgoing" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="16" height="16">
								<path fill="currentColor" d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/>
							</svg>
							<span class="align-middle">{messages.outgoing_label}</span>
							</a>
							<ul id="outgoing" class={`sidebar-dropdown list-unstyled collapse ${activeMenu === '/outgoing' || activeMenu === '/sales' || activeMenu === '/accounts' ? 'show' : ''}`} data-bs-parent="#sidebar" >
								<li class={`sidebar-item ${activeMenu === '/sales' ?'active':''}`}><Link class="sidebar-link" to="/sales" onClick={() => handleMenuClick('/sales')}>{messages.sales_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/accounts' ?'active':''}`}><Link class="sidebar-link" to="/accounts" onClick={() => handleMenuClick('/accounts')}>{messages.accounts_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/charts' ? 'active' : ''}`}>
							<a href="/charts" data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
								<path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.8-7.2-16-16-16H16C7.2 64 0 71.2 0 80v336c0 17.7 14.3 32 32 32h464c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>
							</svg>
							<span class="align-middle">{messages.charts_label}</span>
							</a>
						</li>

						<li class={`sidebar-item ${activeMenu === '/applications' ? 'active' : ''}`}>
							<a href="/applications" onClick={() => handleMenuClick('/applications')} data-bs-target="#applications" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="16" height="16">
								<path fill="currentColor" d="M12.4 148l232.9 105.7c6.8 3.1 14.5 3.1 21.3 0l232.9-105.7c16.6-7.5 16.6-32.5 0-40L266.7 2.3a25.6 25.6 0 0 0 -21.3 0L12.4 108c-16.6 7.5-16.6 32.5 0 40zm487.2 88.3l-58.1-26.3-161.6 73.3c-7.6 3.4-15.6 5.2-23.9 5.2s-16.3-1.7-23.9-5.2L70.5 210l-58.1 26.3c-16.6 7.5-16.6 32.5 0 40l232.9 105.6c6.8 3.1 14.5 3.1 21.3 0L499.6 276.3c16.6-7.5 16.6-32.5 0-40zm0 127.8l-57.9-26.2-161.9 73.4c-7.6 3.4-15.6 5.2-23.9 5.2s-16.3-1.7-23.9-5.2L70.3 337.9 12.4 364.1c-16.6 7.5-16.6 32.5 0 40l232.9 105.6c6.8 3.1 14.5 3.1 21.3 0L499.6 404.1c16.6-7.5 16.6-32.5 0-40z"/>
							</svg> <span class="align-middle">{messages.applications_label}</span>
							</a>
							<ul id="applications" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
								<li class={`sidebar-item ${activeMenu === '/analitics' ?'active':''}`}><Link class="sidebar-link" to="/analitics">{messages.analytics_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/projects' ?'active':''}`}><Link class="sidebar-link" to="/projects">{messages.projects_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/tables' ?'active':''}`}><Link class="sidebar-link" to="/tables">{messages.tables_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/reports' ?'active':''}`}><Link class="sidebar-link" to="/reports">{messages.reports_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/authentication' ? 'active' : ''}`}>
							<a href="/authentication" onClick={() => handleMenuClick('/authentication')} data-bs-target="#authentication" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='16' height='16'>
								<path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
							</svg> <span class="align-middle">{messages.authentication_label}</span>
							</a>
							<ul id="authentication" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
								<li class={`sidebar-item ${activeMenu === '/signin' ?'active':''}`}><Link class="sidebar-link" to="/signin">{messages.signin_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/signup' ?'active':''}`}><Link class="sidebar-link" to="/signup">{messages.signup_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/reset' ?'active':''}`}><Link class="sidebar-link" to="/reset">{messages.reset_label}</Link></li>
								<li class={`sidebar-item ${activeMenu === '/verification' ?'active':''}`}><Link class="sidebar-link" to="/verification">{messages.verification_label}</Link></li>
							</ul>

						</li>


					</ul>


				</div></div></div></div><div class="simplebar-placeholder" style={{ width: 'auto', height: '1203px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}><div class="simplebar-scrollbar" style={{ height: ' 127px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div></div></div>
			</nav>
		{/* </div> */}
		</>
	)
}

export default SideBar;