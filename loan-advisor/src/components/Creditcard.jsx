// src/components/CreditCard.jsx
import React from 'react';

function CreditCard() {
    return (
        <div className="bg-primary d-flex align-items-center" style={{ height: '100vh' }}> {/* Full height and primary background */}
            <div className="container mx-auto text-center"> {/* Use text-center to center the text */}
                <h2 className="text-white">Credit Cards</h2> {/* Text color for visibility */}
                <p className="text-white">Information about credit cards...</p> {/* Text color for visibility */}
            </div>
        </div>
    );
}

export default CreditCard;

