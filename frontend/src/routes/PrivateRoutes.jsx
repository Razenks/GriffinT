import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRole } from '../services/auth';

export const PrivateRoute = () => {
    const token = localStorage.getItem('authToken');

    return token ? <Outlet /> : <Navigate to="/" replace />;
};

export const AdminRoute = () => {
    const token = localStorage.getItem('authToken');
    const role = getUserRole();

    if (!token) {
        return <Navigate to="/" replace />;
    }

    if (role !== 'Admin' && role !== 'SuperAdmin') {
        alert ("Você não tem permissão para acessar esta página. ");
        return <Navigate to="/home" replace />;
    }
    return <Outlet />;
}