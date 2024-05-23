import React from 'react';

// ELEMENT <P> in 2nd search box
const FaveItemsAsString = ({ expiryItems }) => {
// Helper function to generate a string of items expiring today
    const getExpiryItemsAsString = () => {
        if (expiryItems && expiryItems.length > 0) {
            // Map the names of expiry items and join them into a single string
            const showExpireItemsAsString = expiryItems.map(item => item.name).join(', ');
            return `Items expiring today: ${showExpireItemsAsString}!`;
        } else {
            return "Nothing to Fave!"; // Return message if no items are expiring today
        }
    };

    return (
        <p>{getExpiryItemsAsString()}</p>
    );
}

export default FaveItemsAsString;