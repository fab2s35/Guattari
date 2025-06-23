import React from 'react';
import { Navigate } from 'react-router-dom';

const ClientRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  if (!token || userType !== 'Customer') {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default ClientRoute;
