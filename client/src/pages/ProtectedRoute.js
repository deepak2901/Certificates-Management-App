import React from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../Context/AuthContext';


const checkAuth = () => {
    const accessToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');
    return !!accessToken && !!userId; // Returns true if accessToken exists, false otherwise
  };

  const ProtectedRoute = ({ path, element }) => {
    const isAuthenticated = checkAuth();
  
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/signin" replace state={{ from: path }} />
    );
  };;

export default ProtectedRoute;

