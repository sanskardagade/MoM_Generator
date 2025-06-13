import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        console.log('AuthContext: Checking for existing token...');
        const token = localStorage.getItem('token');
        if (token) {
            console.log('AuthContext: Found existing token, setting authenticated state');
            setIsAuthenticated(true);
        } else {
            console.log('AuthContext: No token found');
        }
    }, []);

    const login = (token) => {
        console.log('AuthContext: Login called with token');
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        console.log('AuthContext: Authentication state updated to true');
    };

    const logout = () => {
        console.log('AuthContext: Logout called');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        console.log('AuthContext: Authentication state updated to false');
    };

    console.log('AuthContext: Current authentication state:', isAuthenticated);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}; 