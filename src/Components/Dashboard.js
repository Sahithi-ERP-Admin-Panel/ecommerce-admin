import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './SideBar';
import Topbar from './Topbar';
import DashboardContent from './Dashboard/DashboardContent';
import Customers from './Customers/Customers';
import Orders from './Orders/Orders';
import Payments from './PaymentDetails/Payments';
import UserProfile from './UserProfile/UserProfile';
import Projects from './Projects/Projects';
function Dashboard() {
    const navigate = useNavigate();
    const [selectedContent, setSelectedContent] = useState('Dashboard');

    useEffect(() => {
        const username = sessionStorage.getItem('username');
        if (!username) {
            navigate('/');
        }
    }, [navigate]);

    const menuItems = ['Dashboard', 'User Profile', 'Projects', 'Authentication','Orders','Accounting','Purchasing'];

    // Map of menu items to their corresponding components
    const componentMap = {
        'Dashboard': DashboardContent,
        'Orders': Orders,
        'Customers': Customers,
        'PaymentDetails': Payments,
        'User Profile': UserProfile,
        'Projects' : Projects,
        'Authentication': Projects,
        'Accounting': Projects,
        'Purchasing': Projects,
    };

    // Dynamically render the selected component
    const renderContent = () => {
        const Component = componentMap[selectedContent];
        return Component ? <Component /> : <DashboardContent />;
    };

    return (
        <>
            <div className="container-fluid p-0">
                <Topbar />
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-0 bg-dark">
                        <Sidebar setSelectedContent={setSelectedContent} menuItems={menuItems} />
                    </div>
                    <div className="col py-3 pe-4 bg-light">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
