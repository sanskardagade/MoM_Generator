import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { API_ENDPOINTS } from "../../config";

export default function Home() {
    const [showLogin, setShowLogin] = useState(true);
    const [showRegister, setShowRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [authError, setAuthError] = useState("");
    const { isAuthenticated, login, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setAuthError("");
        console.log('Login attempt with:', { email });
        console.log('Using API endpoint:', API_ENDPOINTS.LOGIN);
        
        try {
            console.log('Making login request...');
            const response = await fetch(API_ENDPOINTS.LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            console.log('Login response status:', response.status);
            const responseText = await response.text();
            console.log('Login raw response:', responseText);

            let data;
            try {
                data = JSON.parse(responseText);
                console.log('Login parsed response:', data);
            } catch (parseError) {
                console.error('Failed to parse response:', parseError);
                throw new Error('Invalid server response');
            }
            
            if (response.ok) {
                console.log('Login successful, setting token...');
                login(data.token);
                setShowLogin(false);
            } else {
                console.log('Login failed:', data.message);
                setAuthError(data.message || 'Login failed');
            }
        } catch (error) {
            console.error('Login error:', error);
            setAuthError(error.message || 'An error occurred. Please try again.');
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setAuthError("");
        console.log('Register attempt with:', { email, name });
        console.log('Using API endpoint:', API_ENDPOINTS.REGISTER);

        try {
            console.log('Making register request...');
            const response = await fetch(API_ENDPOINTS.REGISTER, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password, name }),
            });

            console.log('Register response status:', response.status);
            const responseText = await response.text();
            console.log('Register raw response:', responseText);

            let data;
            try {
                data = JSON.parse(responseText);
                console.log('Register parsed response:', data);
            } catch (parseError) {
                console.error('Failed to parse response:', parseError);
                throw new Error('Invalid server response');
            }
            
            if (response.ok) {
                console.log('Registration successful, setting token...');
                login(data.token);
                setShowRegister(false);
            } else {
                console.log('Registration failed:', data.message);
                setAuthError(data.message || 'Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setAuthError(error.message || 'An error occurred. Please try again.');
        }
    };

    const handleLogout = () => {
        console.log('Logging out...');
        localStorage.removeItem('token');
        setIsAuthenticated(false);
        setShowLogin(true);
    };

    // Add a console log to check the current state
    console.log('Current state:', {
        isAuthenticated,
        showLogin,
        showRegister,
        authError
    });

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    {showLogin ? (
                        <>
                            <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                            <form onSubmit={handleLogin}>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Login
                                </button>
                            </form>
                            <p className="mt-4 text-center">
                                Don't have an account?{" "}
                                <button
                                    onClick={() => {
                                        setShowLogin(false);
                                        setShowRegister(true);
                                        setAuthError("");
                                    }}
                                    className="text-blue-600 hover:underline"
                                >
                                    Register
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
                            <form onSubmit={handleRegister}>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                </div>
                                {authError && <p className="text-red-500 text-sm mb-4">{authError}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Register
                                </button>
                            </form>
                            <p className="mt-4 text-center">
                                Already have an account?{" "}
                                <button
                                    onClick={() => {
                                        setShowRegister(false);
                                        setShowLogin(true);
                                        setAuthError("");
                                    }}
                                    className="text-blue-600 hover:underline"
                                >
                                    Login
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-screen">
                <img
                    src="/mom_final.png"
                    alt="Meeting Background"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <button
                            onClick={() => navigate('/automated')}
                            className="bg-green-600 text-white py-4 px-16 rounded-lg shadow-lg text-2xl font-semibold hover:bg-green-700 transition transform hover:scale-105"
                        >
                            Start
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}