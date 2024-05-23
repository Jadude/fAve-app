// OK

import React from 'react';
import DaysUntilExpiry from './DaysUntilExpiry.jsx';
import DeleteIngredientButton from './DeleteIngredientButton.jsx';
import EditIngredientButton from "./EditIngredientButton.jsx";

const IngredientList = ({ingredients, removeIngredient}) => {

    //create a new array containing sorted ingredients from `ingredients` (to avoid modifying the original array)
    const sortedIngredients = ingredients.slice().sort((a, b) => {
        return new Date(a.expiryDate) - new Date(b.expiryDate);

    });

    return (
        <section className="fave__tableBox">
                {ingredients.length > 0 ? (
                    <div className="table-container">
                    <table className="ingredient__table ingredient__table--mod">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Expiry date</th>
                            <th>Quantity</th>
                            <th>Days until expiry</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {sortedIngredients.map((ingredient, index) => (
                            <tr key={index} className="ingredient">
                                <td>{ingredient.name}</td>
                                <td>{ingredient.expiryDate}</td>
                                <td>{ingredient.quantity} {ingredient.unit}</td>
                                <td><DaysUntilExpiry expiryDate={ingredient.expiryDate}/></td>
                                <td>
                                    <EditIngredientButton index={index} onRemove={removeIngredient}/>
                                    <DeleteIngredientButton index={index} onRemove={removeIngredient}/>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                    )
                    : (
                    <p>Add new products!</p>
                )}
            </section>
    );
};

export default IngredientList;