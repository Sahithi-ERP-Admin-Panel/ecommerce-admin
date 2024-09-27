import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthProvider";

// const PrivateRoute = () => {
//   const user = useAuth();
//   debugger
//   if (!user.token) 
//     return <Navigate to="/" />;
//   else
//     return <Outlet />;
// };


const PrivateRoute = () => {
  const { token } = useAuth(); 
  debugger
  if (!token) {
    return <Navigate to="/" />; 
  }

  return <Outlet />; 
};
export default PrivateRoute;