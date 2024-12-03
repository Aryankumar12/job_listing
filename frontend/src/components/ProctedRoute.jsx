import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Adjust the import path

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(UserContext); // Use the context to get user

  if (!user) {
    return <Navigate to="/login" replace />; // Redirect to login if user is not authenticated
  }

  return children; // Render the protected component if authenticated
};

export default ProtectedRoute;
