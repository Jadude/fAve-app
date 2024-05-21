//ok

import React, { useState, useEffect } from 'react';
import IngredientList from "../components/IngredientsList.jsx";
//utilities
import {getSavedIngredients} from "./utilities.jsx";


const MyProductsDisplay = () => {
    // state 'ingredients' started with HELPER FUNCTION
    const [ingredients, setIngredients] = useState(getSavedIngredients());

    // save the current state of ingredients to localStorage every time the state changes
    useEffect(() => {
        localStorage.setItem('myProducts', JSON.stringify(ingredients));
    }, [ingredients]);

    // FUNCTION removes the component from the list based on its index
    const removeIngredient = (index) => {
        // new array contains all ingredients except the deleted one
        const newIngredients = ingredients.filter((_, i) => i !== index);
        // update
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
