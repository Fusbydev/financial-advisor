import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [userName, setUserName] = useState(null); // State to store user's name
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleRedirect = (path) => navigate(path);
    console.log(userName)
    // Fetch user data from localStorage on component mount
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.full_name) setUserName(user.full_name);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Clear user data from localStorage
        setUserName(null); // Reset userName state
        navigate("/login"); // Redirect to login page
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
                        <div className="d-flex align-items-center">
                            {userName ? (
                                <>
                                    <p className="navbar-text me-2 mt-2">{userName}</p>
                                    <button className="log-out" onClick={handleLogout}><span>Logout</span></button>
                                </>
                            ) : (
                                <>
                                    <button className="me-2 sign-up" onClick={() => handleRedirect('/login')}><span>Sign Up</span></button>
                                    <button className="login me-2" onClick={() => handleRedirect('/login')}><span>Login</span></button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;
