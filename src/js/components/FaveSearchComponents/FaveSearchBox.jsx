import React from 'react';
import FaveItemsAsString from "./FaveItemsAsString.jsx";

// 2 search boxes UI
const FaveSearchBox = ({ ingredients, setIngredients, handleSearch, handleFaveSearch, expiryItems }) => {
    return (
        <>
            {/* fave section */}
            <section className="fave__searchBox">

                <h3> Try fave button!</h3>
                <button className="button__fave logo__font" onClick={handleFaveSearch}>Fave</button>
            </section>

            {/* entering custom ingredients section */}
            <section className="fave__searchBox">
                <h4>or write what you want to use today!</h4>
                {/* info with items expiring today */}
                <FaveItemsAsString expiryItems={expiryItems} />
                {/* input for entering ingredients */}
                <input
                    type="text"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    placeholder={`Enter ingredients, separated by "."`}
                />
                <button onClick={() => handleSearch(ingredients)}>Search for yourself</button>
            </section>
        </>
    );
};

export default FaveSearchBox;