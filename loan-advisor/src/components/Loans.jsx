// src/components/Loans.jsx
import React, { useEffect, useState } from 'react';
import './loans.css';

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
        // Sample loan types array
        return [
            {
                name: 'Credit Line',
                description: 'Ideal for recurring business expenses such as inventory, employee salaries, utilities, equipment maintenance, and delivery costs',
                image: 'https://placehold.co/500x300.',
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

    console.log("Loan data state:", loanData); // Debugging to check if data is set

    return (
        <div className="" style={{ height: '100vh' }}>
            <div className="container mx-auto text-start" style={{ height: 'auto', marginTop: '100px' }}>
                <h1 className="">Different Types of Loans</h1>
                <p className="">Find one that suits your needs</p>
            </div>

            <div className="container pb-3" style={{ height: 'auto' }}>
                {loanData.length > 0 ? (
                    loanData.map((loan, index) => (
                        <div className="row" key={index}>
                            {index % 2 === 0 ? (
                                <>
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <h1>{loan.name}</h1>
                                        <p>{loan.description}</p>
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <img src={loan.image} alt={loan.name} style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <img src={loan.image} alt={loan.name} style={{ width: '100%', height: 'auto' }} />
                                    </div>
                                    <div className="col-md-6 col-lg-6 col-sm-6">
                                        <h1>{loan.name}</h1>
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
    );
}

export default Loans;
