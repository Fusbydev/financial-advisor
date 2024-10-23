// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import HomeBody from './components/HomeBody.jsx';
import Loans from './components/Loans.jsx'; // Import the Loans component
import CreditCard from './components/CreditCard.jsx'; // Import the CreditCard component

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/home" element={<HomeBody />} />
                <Route path="/loans" element={<Loans />} /> {/* Route for Loans */}
                <Route path="/credit-card" element={<CreditCard />} /> {/* Route for Credit Card */}
                <Route path="/" element={<HomeBody />} /> {/* Default route */}
                {/* Add more routes as needed */}
            </Routes> 
        </Router>
    );
}

export default App;
