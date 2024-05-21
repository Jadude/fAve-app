//ok

import React from 'react';

//  ELEMENT: BUTTON FOR REMOVING A PRODUCT FROM LOCAL STORAGE
const DeleteIngredientButton = ({ index, onRemove }) => {

    const handleRemove = () => {
        // calls the onRemove function, passing an index to it (from the component props)
        onRemove(index);
    };

    return (
        <button className="button__icon" onClick={handleRemove}><img src="../../../assets/icons/trash-solid.svg" alt="delete"/></button>
    );
};

export default DeleteIngredientButton;