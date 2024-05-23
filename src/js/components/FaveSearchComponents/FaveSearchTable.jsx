import React from 'react';

// COMPONENT with recipes table
const FaveSearchTable = ({ recipes }) => {
    return (
        <section className="fave__tableBox">
            <table className="ingredient__table">
                <thead>
                <tr>
                    <th>Recipe</th>
                    <th>Have</th>
                    <th>Missing</th>
                    <th>Link</th>
                </tr>
                </thead>
                <tbody>
                {/* map through the recipes array and render each recipe as a table row */}
                {recipes.map(recipe => (
                    <tr key={recipe.id}>
                        <td style={{ fontWeight: 'bold', display: "flex", flexDirection: "column" }}>
                            {recipe.title}
                            <img src={recipe.image} alt={recipe.title} style={{ width: "15rem" }} />
                        </td>
                        <td>
                            <ul>
                                {recipe.usedIngredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <ul>
                                {recipe.missedIngredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </td>
                        <td>
                            <a style={{color: "rgb(44, 95, 45)", textDecoration: "none" }} href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer">View recipe</a>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    );
};

export default FaveSearchTable;