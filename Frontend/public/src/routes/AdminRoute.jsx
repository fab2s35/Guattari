import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  if (!token || userType !== 'Admin') {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default AdminRoute;
