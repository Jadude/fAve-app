// OK

import React, { useState } from 'react';

const IngredientForm = ({ addIngredient }) => {
    // INGREDIENT  STATE (Stores the component and functions to update it.)
    const [name, setName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [quantity, setQuantity] = useState('');
    const [unit, setUnit] = useState('pcs');
    const [error, setError] = useState(''); // for validation msg

    // VALIDATION FUNCTION
    const validateForm = () => {
        //setting the date for validation
        const today = new Date().setHours(0, 0, 0, 0); // without hours and seconds, etc.
        const expiry = new Date(expiryDate).setHours(0, 0, 0, 0);

        // validation
        if (name.length < 2) {
            setError('The product name must consist of at least 2 characters.');
            return false;
        }
        if (quantity <= 0) {
            setError('Quantity must be greater than zero.');
            return false;
        }
        if (expiry < today) {
            setError('This product cannot be added as its expiration date has passed. You should bin it.');
            return false;
        }
        setError(''); // no error - no validation msg
        return true;
    };

// FORM SUBMISSION FUNCTION
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // OBJECT - local storage
            const ingredient = { name, expiryDate, quantity, unit };
            // addIngredient function
            addIngredient(ingredient);
            // CLEAR FORM - RESETS STATE
            setName('');
            setExpiryDate('');
            setQuantity('');
            setUnit('pcs');
        }
    };

    // UI
    return (
        // FORM
        <form onSubmit={handleSubmit}>

            {/*vVALIDATION MSG*/}
            {error && <p className="error__msg" >{error}</p>}

            <div className="form-group">
                <label>Product name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Expiry date</label>
                <input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Quantity</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Unit</label>
                <select value={unit} onChange={(e) => setUnit(e.target.value)} required>
                    <option value="pcs">pcs</option>
                    <option value="ml">ml</option>
                    <option value="l">l</option>
                    <option value="g">g</option>
                    <option value="dag">dag</option>
                    <option value="kg">kg</option>
                    <option value="other">other</option>
                </select>
            </div>
            <button type="submit">Add Ingredient</button>
        </form>
    );
};

export default IngredientForm;

