// src/components/CreditCardPage.jsx
import React, { useEffect, useState } from 'react';
import Footer from "../Footer";
import './loans.css'; // Ensure you have the required styles

function CreditCard() {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        const fetchCardData = async () => {
            const response = await fetchCardTypes();
            console.log("Fetched card data:", response); // Debugging
            setCardData(response);
        };

        fetchCardData();
    }, []);

    const fetchCardTypes = () => {
        return [
            {
                name: 'Rewards Card',
                description: 'Earn points on every purchase, redeemable for travel, merchandise, and more.',
                image: 'https://placehold.co/500x300/',
            },
            {
                name: 'Cashback Card',
                description: 'Get a percentage of your purchases back as cash rewards.',
                image: 'https://placehold.co/500x300',
            },
            {
                name: 'Travel Card',
                description: 'Designed for frequent travelers with travel-related perks.',
                image: 'https://placehold.co/500x300',
            },
            {
                name: 'Student Card',
                description: 'Tailored for students to build credit with lower limits.',
                image: 'https://placehold.co/500x300',
            },
        ];
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="container flex-grow-1" style={{ marginTop: '100px' }}>
                {cardData.map((card, index) => (
                    <div className="row mb-4" key={index}>
                        {index % 2 === 0 ? (
                            <>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <h1>{card.name}</h1>
                                    <p>{card.description}</p>
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <img src={card.image} alt={card.name} style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <img src={card.image} alt={card.name} style={{ width: '100%', height: 'auto' }} />
                                </div>
                                <div className="col-md-6 col-lg-6 col-sm-6">
                                    <h1>{card.name}</h1>
                                    <p>{card.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
            <Footer /> {/* Include the Footer component */}
        </div>
    );
}

export default CreditCard;
