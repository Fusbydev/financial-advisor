import React, { useState } from 'react';
import axios from 'axios';
import './LoginSignUp.css';
import { useNavigate } from 'react-router-dom'; // useNavigate instead of Navigate

function LoginComponent() {
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isLogin && formData.password !== formData.confirmPassword) {
            return alert('Passwords do not match!');
        }
    
        try {
            if (isLogin) {
                // Handle login logic here
                const response = await axios.post('http://localhost:5000/api/login', {
                    email: formData.email,
                    password: formData.password,
                });
                navigate('/');
            } else {
                // Send registration data to server
                await axios.post('http://localhost:5000/api/register', {
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                });
                alert('Registration successful');
                setIsLogin(true); // Switch to login form after successful registration
            }
        } catch (error) {
            if (error.response) {
                // Handle known server-side errors
                if (error.response.status === 400 && error.response.data.message === 'Email already exists') {
                    alert('Email already exists. Please use a different email.');
                } else {
                    alert(`Error: ${error.response.data.message}`);
                }
            } else {
                // Handle other errors (network issues, etc.)
                console.error('There was an error!', error);
                alert('Error during ' + (isLogin ? 'login' : 'registration'));
            }
        }
    };
    

    return (
        <div className="container-fluid vh-100 position-relative">
            <h1 className="position-absolute top-0 start-0 m-4">Welcome to Ai Financial Mentor</h1>

            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="container login-form text-center p-4 form">
                    <h2>{isLogin ? 'Login' : 'Register'}</h2>
                    <form onSubmit={handleSubmit}>
                        {/* Full name field for registration */}
                        {!isLogin && (
                            <div className="mb-3 text-start">
                                <label htmlFor="fullName">Full Name</label>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    className="form-control"
                                    placeholder="Enter your full name"
                                    onChange={handleInputChange}
                                    value={formData.fullName}
                                    required={!isLogin}
                                />
                            </div>
                        )}
                        
                        <div className="mb-3 text-start">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter your email"
                                onChange={handleInputChange}
                                value={formData.email}
                                required
                            />
                        </div>
                        
                        <div className="mb-3 text-start">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                                placeholder="Enter your password"
                                onChange={handleInputChange}
                                value={formData.password}
                                required
                            />
                        </div>
                        
                        {!isLogin && (
                            <div className="mb-3 text-start">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    className="form-control"
                                    placeholder="Confirm your password"
                                    onChange={handleInputChange}
                                    value={formData.confirmPassword}
                                    required={!isLogin}
                                />
                            </div>
                        )}

                        <div className="mb-3 text-center loginOrRegister">
                            <p>
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <a 
                                    href="#" 
                                    onClick={() => {
                                        setIsLogin(!isLogin);
                                        // Reset the form data when toggling
                                        setFormData({
                                            fullName: '',
                                            email: '',
                                            password: '',
                                            confirmPassword: '',
                                        });
                                    }} 
                                    className="ms-2"
                                >
                                    {isLogin ? 'Sign Up now' : 'Log in here'}
                                </a>
                            </p>
                        </div>

                        <div className="mb-3 text-center">
                            <button type="submit" className="login-button">
                                {isLogin ? 'Log in' : 'Register'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginComponent;
