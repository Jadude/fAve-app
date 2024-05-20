import React from 'react';
import DeleteIngredientButton from '../elements/DeleteIngredientButton.jsx';
import DaysUntilExpiry from '../elements/DaysUntilExpiry.jsx';
import EditIngredientButton from "../elements/EditIngredientButton.jsx";

const IngredientList = ({ ingredients, removeIngredient }) => {
    return (
        <div className="ingredient-list">
            {ingredients.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Expiry Date</th>
                        <th>Quantity</th>
                        <th>Days Until Expiry</th>
                        <th>Actions</th>
                        <th>To Fave</th>
                    </tr>
                    </thead>
                    <tbody>
                    {ingredients.map((ingredient, index) => (
                        <tr key={index} className="ingredient">
                            <td>{ingredient.name}</td>
                            <td>{ingredient.expiryDate}</td>
                            <td>{ingredient.quantity} {ingredient.unit}</td>
                            <td><DaysUntilExpiry expiryDate={ingredient.expiryDate} /></td>
                            <td>
                                <EditIngredientButton index={index} onRemove={removeIngredient} />
                                <DeleteIngredientButton index={index} onRemove={removeIngredient} />
                            </td>
                            <td>
                                <input>
                                    {/*type="checkbox"*/}
                                </input>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No ingredients available.</p>
            )}
        </div>
    );
};

export default IngredientList;