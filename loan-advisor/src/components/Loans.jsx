// src/components/Loans.jsx
import React, { useEffect, useState } from 'react';
import './loans.css';
import Footer from "../Footer";

function Loans() {
    const [loanData, setLoanData] = useState([]);

    useEffect(() => {
        const fetchLoanData = async () => {
            const response = await fetchLoanTypes();
            console.log("Fetched loan data:", response); // Debugging
            setLoanData(response);
        };

        fetchLoanData();
    }, []);

    const fetchLoanTypes = () => {
        return [
            {
                name: 'Credit Line',
                description: 'Ideal for recurring business expenses such as inventory, employee salaries, utilities, equipment maintenance, and delivery costs',
                image: 'https://placehold.co/500x300',
            },
            {
                name: 'SME Loan',
                description: 'Supports the business in expanding product lines, purchasing new equipment, or meeting other capital expenditures.',
                image: 'https://placehold.co/500x300/FFCC00/FFFFFF',
            },
            {
                name: 'Negosyo Ready Loan',
                description: 'Ideal for businesses with seasonal funding needs',
                image: 'https://placehold.co/500x300/FF6600/FFFFFF',
            },
            {
                name: 'Negosyo Ready Ka-Negosyo SME Loan for Property Acquisition',
                description: 'Ideal for acquisition or construction of property assets for your business.',
                image: 'https://placehold.co/500x300/FF6600/FFFFFF',
            },
        ];
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container mx-auto text-start flex-grow-1" style={{ marginTop: '100px' }}>
                <h1>Different Types of Loans</h1>
                <p>Find one that suits your needs</p>

                <div className="container pb-3">
                    {loanData.length > 0 ? (
                        loanData.map((loan, index) => (
                            <div className="row mb-4" key={index}>
                                {index % 2 === 0 ? (
                                    <>
                                        <div className="col-md-6">
                                            <h2>{loan.name}</h2>
                                            <p>{loan.description}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <img src={loan.image} alt={loan.name} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="col-md-6">
                                            <img src={loan.image} alt={loan.name} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className="col-md-6">
                                            <h2>{loan.name}</h2>
                                            <p>{loan.description}</p>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No loan data available</p>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Loans;
