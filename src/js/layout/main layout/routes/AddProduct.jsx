import React, { useState, useEffect } from 'react';
import IngredientForm from '../../../components/addComponents/IngredientForm.jsx';
//utilities
import { getSavedIngredients } from '../../../utilities/utilities.jsx';



const AddProduct = () => {

    // state 'ingredients' started with HELPER FUNCTION
  const [ingredients, setIngredients] = useState(getSavedIngredients());

  // useEffect synchronizes the state of 'ingredients' with localStorage every time 'ingredients' changes
    useEffect(() => {
        localStorage.setItem('myProducts', JSON.stringify(ingredients));
    }, [ingredients]);

    // FUNCTION as props to IngredientForm
    const addIngredient = (ingredient) => {
        setIngredients([...ingredients, ingredient]);
    };

    return (
        <main className="outlet--container">
            <section className="app__section">
            <h2>Add new product here:</h2>
            <IngredientForm addIngredient={addIngredient} />
                {/*<div className="app__section--list"></div>*/}
            </section>
        </main>
    );
};

export default AddProduct;

