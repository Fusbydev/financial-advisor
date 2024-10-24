// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import HomeBody from './components/HomeBody.jsx';
import Loans from './components/Loans.jsx'; // Import the Loans component
import CreditCard from './components/Creditcard.jsx'; // Import the CreditCard component
import Mentor from './components/Mentorpage';
import AuthContainer from './components/LoginSignUp';

function App() {
    const location = useLocation(); // Get the current location

    return (
        <>
            {/* Conditionally render the Header based on the current location */}
            {location.pathname !== '/login' && <Header />} {/* Hide Header on login page */}
            <Routes>
                <Route path="/home" element={<HomeBody />} />
                <Route path="/loans" element={<Loans />} /> {/* Route for Loans */}
                <Route path="/credit-card" element={<CreditCard />} /> {/* Route for Credit Card */}
                <Route path="/" element={<HomeBody />} /> {/* Default route */}
                <Route path="/mentor-page" element={<Mentor />} />
                <Route path="/login" element={<AuthContainer />} /> {/* Route for Login */}
            </Routes>
        </>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
