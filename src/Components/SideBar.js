import { Link } from "react-router-dom"
import logo from '../statics/images/logo.png'
import messages from '../statics/messages.json'
const SideBar = ()=>{
    const pdfFile = `/logo.pdf`;
    return(
        <>
         <nav id="sidebar" class="sidebar js-sidebar">
			<div class="sidebar-content js-simplebar" data-simplebar="init"><div class="simplebar-wrapper" style={{margin: "0px"}}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{right: '0px', bottom: '0px'}}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{height: '100%', overflow: 'hidden scroll'}}><div class="simplebar-content" style={{padding: '0px'}}>
				<a class="sidebar-brand" href="/dashboard">
               
                    <img src={logo} className="img-fluid"/>
				</a>

                <ul class="sidebar-nav">					
					<li class="sidebar-item active">
						<a href="/dashboard" data-bs-target="#dashboards" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.dashoard_label}</span>
						</a>
						<ul id="dashboards" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.default_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.ecommerce_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.crm_label}</Link></li>
						</ul>
					</li>

                    <li class="sidebar-item">
						<a class="sidebar-link" href="/orders">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                        <span class="align-middle">{messages.orders_label}</span>
	                    </a>
					</li>

					<li class="sidebar-item">
						<a href="/receiving" data-bs-target="#receiving" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.receiving_label}</span>
						</a>
						<ul id="receiving" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.production_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.warehouse_label}</Link></li>
						</ul>
					</li>

					<li class="sidebar-item">
						<a href="/outgoing" data-bs-target="#outgoing" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.outgoing_label}</span>
						</a>
						<ul id="outgoing" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.sales_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.accounts_label}</Link></li>
						</ul>
					</li>

					<li class="sidebar-item">
						<a href="/charts" data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.charts_label}</span>
						</a>
					</li>
					
					<li class="sidebar-item">
						<a href="/applications" data-bs-target="#applications" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.applications_label}</span>
						</a>
						<ul id="applications" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.analytics_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.projects_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.tables_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.reports_label}</Link></li>
						</ul>
					</li>
					
					<li class="sidebar-item">
						<a href="/authentication" data-bs-target="#authentication" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sliders align-middle"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg> <span class="align-middle">{messages.authentication_label}</span>
						</a>
						<ul id="authentication" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.signin_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.signup_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.reset_label}</Link></li>
							<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.verification_label}</Link></li>
						</ul>

					</li>
					
					
				</ul>

				
			</div></div></div></div><div class="simplebar-placeholder" style={{width: 'auto', height: '1203px'}}></div></div><div class="simplebar-track simplebar-horizontal" style={{visibility: 'hidden'}}><div class="simplebar-scrollbar" style={{width: '0px', display: 'none'}}></div></div><div class="simplebar-track simplebar-vertical" style={{visibility: 'visible'}}><div class="simplebar-scrollbar" style={{height:' 127px' ,transform: 'translate3d(0px, 0px, 0px)', display: 'block'}}></div></div></div>
		</nav>
        </>
    )
}

export default SideBar