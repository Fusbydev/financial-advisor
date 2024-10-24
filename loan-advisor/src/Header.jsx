import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // useNavigate instead of Navigate
import './header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleRedirect = () => {
        navigate('/login'); // Use navigate function to redirect
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">FinanceMentor</a>

                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="offcanvas" 
                    data-bs-target="#offcanvasNavbar" 
                    aria-controls="offcanvasNavbar" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FinanceMentor</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>

                    <div className="offcanvas-body justify-content-between">
                        {/* Center the links */}
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/" 
                                    style={({ isActive }) => ({ color: isActive ? 'red' : 'inherit' })}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/loans" 
                                    style={({ isActive }) => ({ color: isActive ? 'red' : 'inherit' })}
                                >
                                    Loans
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink 
                                    className="nav-link active" 
                                    to="/credit-card" 
                                    style={({ isActive }) => ({ color: isActive ? 'red' : 'inherit' })}
                                >
                                    Credit Card
                                </NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <button className="me-2 sign-up" onClick={handleRedirect}><span>Sign Up</span></button>
                            <button className="login me-2" onClick={handleRedirect}><span>Login</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
