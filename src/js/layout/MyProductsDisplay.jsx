// OK

import React, { useState, useEffect } from 'react';
import IngredientList from "../components/IngredientsList.jsx";




const MyProductsDisplay = () => {
    const [ingredients, setIngredients] = useState(() => {
        const savedIngredients = localStorage.getItem('myProducts');
        return savedIngredients ? JSON.parse(savedIngredients) : [];
    });

    useEffect(() => {
        localStorage.setItem('myProducts', JSON.stringify(ingredients));
    }, [ingredients]);

    const removeIngredient = (index) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    return (
        <main className="outlet--container">
            <div className="app__section">
            <h1>My products:</h1>
            <IngredientList ingredients={ingredients} removeIngredient={removeIngredient} />
            </div>
        </main>
    );
};

export default MyProductsDisplay;
