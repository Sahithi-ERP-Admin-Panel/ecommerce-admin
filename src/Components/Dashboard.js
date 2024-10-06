import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './SideBar';
import Topbar from './Topbar';
import '../Css/light-theme.css';
import '../Css/dark-theme.css';
import $ from 'jquery';
import NavIcons from './NavIcons';
import './../Css/navStyles.scss';

function Dashboard() {
    const [theme, setTheme] = useState('dark');
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(location.pathname);
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [isSNavOpen, setNavOpen] = useState(true);
    const [fixedOpen, setFixedOpen] = useState(false);
    let isFixed = localStorage.getItem('fixedSideBar');
    if(isFixed === undefined){
        localStorage.setItem('fixedSideBar',false);
        isFixed = false;
    }
    
    // Function to toggle the theme
    const handleMenuClick = (menu) => {
        debugger
		setActiveMenu(menu); 
        setSidebarCollapsed(true);
        setNavOpen(false);
        localStorage.setItem('fixedSideBar',true);
        isFixed = true;
	};

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme === 'light' ? 'bg-light' : 'bg-dark';
        localStorage.setItem('theme', newTheme);
    };

    // useEffect(() => {
    //     setActiveMenu(location.pathname);
    // }, [location]);

    const toggleSidebar = () => {
        debugger
        setSidebarCollapsed(!isSidebarCollapsed);
        if (isSNavOpen) {
            setNavOpen(false);
            setSidebarCollapsed(true);
        }else{
            setNavOpen(true); 
            setSidebarCollapsed(false);
        }
        localStorage.setItem('fixedSideBar',false);
        isFixed = false;
    };
    const navToggle = (menu) => {
        debugger
        setNavOpen(!isSNavOpen);
        if (isSidebarCollapsed) {
            setSidebarCollapsed(false);
            setNavOpen(true);
        }else{
            setNavOpen(false);
            setFixedOpen(true);
            setSidebarCollapsed(true);
            
        }
        
    };
    // useEffect(() => {
    //     if(location.pathname === '/dashboard'){
    //         setSidebarCollapsed(false);
    //         setNavOpen(true);
    //     }else{
    //         setNavOpen(false);
    //         localStorage.setItem('theme', true);
    //         setSidebarCollapsed(true);
    //     }
    // })
    
    return (
        <div className="container-fluid p-0" style={{ overflow: "hidden" }}>
            <div className="row flex-nowrap">
                {/* Sidebar */}
                <div className={`col-auto px-0 bg-light vh-100 side-wrap ${isSidebarCollapsed ? 'active-side-wrap' : 'deactive-side-wrap'}`}>
                    <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} isSidebarCollapsed={isSidebarCollapsed} toggleSidebar={toggleSidebar} handleMenuClick={handleMenuClick}/>
                </div>
                
                {/* Nav Icons */}
                <div className={`col-auto px-0 bg-light vh-100 side-wrap ${isSNavOpen  ? 'active-side-wrap' : ''}`}>
                    <NavIcons navToggle={navToggle} />
                </div>
                
                {/* Main Content */}
                <div className={`col bg-light ps-3`} style={{ height: "100vh", overflowY: "auto" }}>
                    <Topbar toggleTheme={toggleTheme} theme={theme} />
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
