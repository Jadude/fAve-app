//to make

import React from 'react';

const EditIngredientButton = ({ index, onRemove }) => {
    const handleRemove = () => {
        onRemove(index);
    };

    return (
        <button onClick={handleRemove}><img src="../../assets/icons/edit-solid.svg" alt="delete"/></button>
    );
};

export default EditIngredientButton;