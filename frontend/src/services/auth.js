import { jwtDecode } from "jwt-decode";

// src/services/auth.js

export const getUserRole = () => {
    return localStorage.getItem('userRole') || 'Guest';
};

export const getUserName = () => {
    return localStorage.getItem('userName') || 'Usuário';
};

export const logout = () => {
    localStorage.clear();
    window.location.href = '/'; // Força o recarregamento e volta pro login
};
