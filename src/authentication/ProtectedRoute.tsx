import React, { ReactNode } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { checkAuth } from './AuthService';

const PrivateRoute = () => (
  checkAuth() ? <Outlet /> : <Navigate to="/login" replace />
);

export default PrivateRoute;




