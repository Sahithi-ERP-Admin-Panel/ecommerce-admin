import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './SideBar';
import Topbar from './Topbar';
import '../Css/light-theme.css';
import '../Css/dark-theme.css';

function Dashboard() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.body.className = newTheme === 'light' ? 'bg-light' : 'bg-dark';
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="container-fluid p-0" style={{overflow:"hidden"}}>
           
            <div className="row flex-nowrap">
                <div className={`col-auto col-md-3 col-xl-2 px-0 bg-light`}>
                    <Sidebar />
                </div>
                <div className={`col bg-light ps-3`} style={{height:"100vh",overflow:"auto"}}>
                    <Topbar toggleTheme={toggleTheme} theme={theme} />
                    <div className='p-4'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
