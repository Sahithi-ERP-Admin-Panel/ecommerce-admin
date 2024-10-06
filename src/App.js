import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Customers from './Components/Customers/Customers';
import Orders from './Components/Orders/Orders';
import Payments from './Components/PaymentDetails/Payments';
import UserProfile from './Components/UserProfile/UserProfile';
import Projects from './Components/Projects/Projects';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './context/PrivateRoute';
import DashboardContent from './Components/Dashboard/DashboardContent'
import './Css/style.css'
import Production from './Components/production/Production';
import Warehouse from './Components/warehouse/Warehouse';
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public route for login */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route element={<Dashboard />}>
              <Route path="dashboard" element={<DashboardContent />} />
              <Route path="customers" element={<Customers />} />
              <Route path="orders" element={<Orders />} />
              <Route path="payments" element={<Payments />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="projects" element={<Projects />} />
              <Route path="receivingproduction" element={<Production/>}/>
              <Route path='warehouse' element={<Warehouse/>}/>
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
