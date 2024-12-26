// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // If the user is not authenticated, redirect to the login page (or another route)
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the protected element
  return element;
};

export default ProtectedRoute;
