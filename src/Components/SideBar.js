import { Link } from "react-router-dom"
import logo from '../statics/images/logo.png'
import messages from '../statics/messages.json'
const SideBar = ({ activeMenu, setActiveMenu }) => {
	const pdfFile = `/logo.pdf`;
	const handleMenuClick = (menu) => {
		setActiveMenu(menu); // Update active menu when clicked
	};
	return (
		<>
			<nav id="sidebar" class="sidebar js-sidebar">
				<div class="sidebar-content js-simplebar" data-simplebar="init"><div class="simplebar-wrapper" style={{ margin: "0px" }}><div class="simplebar-height-auto-observer-wrapper"><div class="simplebar-height-auto-observer"></div></div><div class="simplebar-mask"><div class="simplebar-offset" style={{ right: '0px', bottom: '0px' }}><div class="simplebar-content-wrapper" tabindex="0" role="region" aria-label="scrollable content" style={{ height: '100%', overflow: 'hidden scroll' }}><div class="simplebar-content" style={{ padding: '0px' }}>
					<a class="sidebar-brand" href="/dashboard">

						<img src={logo} className="img-fluid" />
					</a>




						<li class={`sidebar-item ${activeMenu === '/outgoing' || activeMenu === '/sales' || activeMenu === '/accounts' ? 'active' : ''}`}>
							<a href="/outgoing" onClick={() => handleMenuClick('/outgoing')} data-bs-target="#outgoing" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="24" height="24">
								<path fill="currentColor" d="M528.1 301.3l47.3-208C578.8 78.3 567.4 64 552 64H159.2l-9.2-44.8C147.8 8 137.9 0 126.5 0H24C10.7 0 0 10.7 0 24v16c0 13.3 10.7 24 24 24h69.9l70.2 343.4C147.3 417.1 136 435.2 136 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-15.7-6.4-29.8-16.8-40h209.6C430.4 426.2 424 440.3 424 456c0 30.9 25.1 56 56 56s56-25.1 56-56c0-22.2-12.9-41.3-31.6-50.4l5.5-24.3c3.4-15-8-29.3-23.4-29.3H218.1l-6.5-32h293.1c11.2 0 20.9-7.8 23.4-18.7z"/>
							</svg>
							<span class="align-middle">{messages.outgoing_label}</span>
							</a>
							<ul id="outgoing" class={`sidebar-dropdown list-unstyled collapse ${activeMenu === '/outgoing' || activeMenu === '/sales' || activeMenu === '/accounts' ? 'show' : ''}`} data-bs-parent="#sidebar" >
								<li class="sidebar-item active"><Link class="sidebar-link" to="/sales" onClick={() => handleMenuClick('/sales')}>{messages.sales_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/accounts" onClick={() => handleMenuClick('/accounts')}>{messages.accounts_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/charts' ? 'active' : ''}`}>
							<a href="/charts" data-bs-target="#charts" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
								<path fill="currentColor" d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.8-7.2-16-16-16H16C7.2 64 0 71.2 0 80v336c0 17.7 14.3 32 32 32h464c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"/>
							</svg>
							<span class="align-middle">{messages.charts_label}</span>
							</a>
						</li>

						<li class={`sidebar-item ${activeMenu === '/applications' ? 'active' : ''}`}>
							<a href="/applications" onClick={() => handleMenuClick('/applications')} data-bs-target="#applications" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24">
								<path fill="currentColor" d="M12.4 148l232.9 105.7c6.8 3.1 14.5 3.1 21.3 0l232.9-105.7c16.6-7.5 16.6-32.5 0-40L266.7 2.3a25.6 25.6 0 0 0 -21.3 0L12.4 108c-16.6 7.5-16.6 32.5 0 40zm487.2 88.3l-58.1-26.3-161.6 73.3c-7.6 3.4-15.6 5.2-23.9 5.2s-16.3-1.7-23.9-5.2L70.5 210l-58.1 26.3c-16.6 7.5-16.6 32.5 0 40l232.9 105.6c6.8 3.1 14.5 3.1 21.3 0L499.6 276.3c16.6-7.5 16.6-32.5 0-40zm0 127.8l-57.9-26.2-161.9 73.4c-7.6 3.4-15.6 5.2-23.9 5.2s-16.3-1.7-23.9-5.2L70.3 337.9 12.4 364.1c-16.6 7.5-16.6 32.5 0 40l232.9 105.6c6.8 3.1 14.5 3.1 21.3 0L499.6 404.1c16.6-7.5 16.6-32.5 0-40z"/>
							</svg> <span class="align-middle">{messages.applications_label}</span>
							</a>
							<ul id="applications" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
								<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.analytics_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.projects_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.tables_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/dashboard">{messages.reports_label}</Link></li>
							</ul>
						</li>

						<li class={`sidebar-item ${activeMenu === '/authentication' ? 'active' : ''}`}>
							<a href="/authentication" onClick={() => handleMenuClick('/authentication')} data-bs-target="#authentication" data-bs-toggle="collapse" class="sidebar-link collapsed" aria-expanded="false">
							<svg class="custom-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='24' height='24'>
								<path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
							</svg> <span class="align-middle">{messages.authentication_label}</span>
							</a>
							<ul id="authentication" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar" >
								<li class="sidebar-item active"><Link class="sidebar-link" to="/signin">{messages.signin_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/signup">{messages.signup_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/reset">{messages.reset_label}</Link></li>
								<li class="sidebar-item active"><Link class="sidebar-link" to="/ve">{messages.verification_label}</Link></li>
							</ul>

						</li>


					</ul>


				</div></div></div></div><div class="simplebar-placeholder" style={{ width: 'auto', height: '1203px' }}></div></div><div class="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div class="simplebar-scrollbar" style={{ width: '0px', display: 'none' }}></div></div><div class="simplebar-track simplebar-vertical" style={{ visibility: 'visible' }}><div class="simplebar-scrollbar" style={{ height: ' 127px', transform: 'translate3d(0px, 0px, 0px)', display: 'block' }}></div></div></div>
			</nav>
		</>
	)
}

export default SideBar