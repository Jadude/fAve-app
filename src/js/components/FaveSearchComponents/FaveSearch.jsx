import React, { useState, useEffect } from 'react';
import FaveSearchBox from './FaveSearchBox.jsx';
import RecipeTable from './RecipeTable.jsx';
import PaginationControls from './PaginationControls.jsx';
import {calculateDaysUntilExpiry} from "../../utilities/calculateDaysUntilExpiry.jsx";

// MAIN FAVE COMPONENT
const FaveSearch = () => {
    // STATE
    const [ingredients, setIngredients] = useState('');
    const [recipes, setRecipes] = useState([]);

    // fave search
    const [expiryItems, setExpiryItems] = useState([]);

    // communication state
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [noResults, setNoResults] = useState(false);

    // search settings
    const recipesPerSearch = 20;
    const recipesPerPage = 4;

    // table settings
    const [currentPage, setCurrentPage] = useState(1);

    // useEffect to load expiry items from localStorage
    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('myProducts')) || [];
        const expiredProducts = products.filter(product => calculateDaysUntilExpiry(product.expiryDate) === 0);
        setExpiryItems(expiredProducts);
    }, []);


    // FUNCTION to search
    const handleSearch = (query) => {
        const keyAPI = '4ef4f9544a3b4e51a1290e544f11bf61';
        const urlAPI = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${keyAPI}&ingredients=${query}&number=${recipesPerSearch}`;

        // reset state
        setLoading(true);
        setError(null);
        setNoResults(false);
        setRecipes([]);
        setCurrentPage(1);

        fetch(urlAPI)

            .then(response => {

                // console.log('Server response:', response); // server log for diagnostics
                if (!response.ok) {
                    throw new Error('Network response was not ok'); // error msg
                }
                return response.json();
            })

            .then(data => {
                // console.log('Fetched data:', data); // server log for diagnostics
                if (data.length === 0) {
                    setNoResults(true); // for msg no recipes found
                } else {
                    // Process and set the fetched recipes
                    const foundRecipes = data.map(recipe => ({
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        usedIngredients: recipe.usedIngredients.map(ing => ing.name),
                        missedIngredients: recipe.missedIngredients.map(ing => ing.name),
                        recipeUrl: `https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`
                        //replace method is used to replace all spaces (" ") in the recipe title with hyphens ("-")
                    }));
                    setRecipes(foundRecipes);
                }
                setLoading(false); // end loading state


            })
            .catch(error => {
                // console.error('Fetch error:', error); // server log for diagnostics
                setError(error.message); // set error message
                setLoading(false); // end loading state
            });
    };

// FUNCTION to fave search (0 days expiry date)
    const handleFaveSearch = () => {
        const faveIngredients = expiryItems.map(item => item.name).join(',');
        handleSearch(faveIngredients);
    };


// pagination support

    const currentPageIndex = (currentPage - 1) * recipesPerPage; // starts with 0
    const totalPages = Math.ceil(recipes.length / recipesPerPage); // how many pages are needed to accommodate all the recipes
    const currentPagePagination = recipes.slice(currentPageIndex, currentPageIndex + recipesPerPage); // here: 1, 2, 3, 4

    // reduces currentPage by 1, but not more than totalPages
    const prevPageConst = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };
    // increases currentPage by 1, but not more than totalPages
    const nextPageConst = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    return (
        <>
            <h2>Recipe Search</h2>

            <section className="fave__searchBoxes">
                <FaveSearchBox
                    ingredients={ingredients}
                    setIngredients={setIngredients}
                    handleSearch={handleSearch}
                    handleFaveSearch={handleFaveSearch}
                    expiryItems={expiryItems}
                />
            </section>

            <section>
                {loading && <p className="error__msg error__msg--info error__msg--resize">Loading...</p>}
                {error && <p className="error__msg error__msg--resize">Error: {error}!</p>}
                {noResults &&
                    <p className="error__msg error__msg--info error__msg--resize">No matching recipes found.</p>}
            </section>

            {/*// table only if recipes found*/}
            {recipes.length > 0 && <RecipeTable recipes={currentPagePagination}/>}
            {/*// table only when needed*/}
            {recipes.length > recipesPerPage && (
                <PaginationControls
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPreviousPage={prevPageConst}
                    onNextPage={nextPageConst}
                />
            )}
        </>
    );
};

export default FaveSearch;
