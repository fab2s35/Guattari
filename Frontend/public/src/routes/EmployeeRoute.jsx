import React from 'react';
import { Navigate } from 'react-router-dom';

const EmployeeRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');

  if (!token || userType !== 'Employee') {
    return <Navigate to="/not-authorized" />;
  }

  return children;
};

export default EmployeeRoute;
