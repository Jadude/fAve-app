import React, { useState, useEffect } from 'react';
import IngredientForm from '../components/IngredientForm.jsx';

// HELPER FUNCTION for retrieving components from localStorage
const getSavedIngredients = () => {
    const savedIngredients = localStorage.getItem('myProducts');
    return savedIngredients ? JSON.parse(savedIngredients) : [];
};


const AddProduct = () => {

    // state 'ingredients' started with HELPER FUNCTION
  const [ingredients, setIngredients] = useState(getSavedIngredients());

  // useEffect synchronizes the state of 'ingredients' with localStorage every time 'ingredients' changes
    useEffect(() => {
        localStorage.setItem('myProducts', JSON.stringify(ingredients));
    }, [ingredients]);

    const addIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    return (
        <main className="outlet--container">
            <section className="app__section">
            <h2>Add new product here:</h2>
            <IngredientForm addIngredient={addIngredient} />
                <div className="app__section app__section--modifier">
                    show me added products, please! Soooon! Soon as possible!
                </div>
            </section>
        </main>
    );
};

export default AddProduct;