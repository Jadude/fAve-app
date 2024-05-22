import React, {useState, useEffect} from 'react';

const RecipeSearch = () => {
    // STATE declarations
    const [ingredients, setIngredients] = useState(''); // store the user's input for ingredients
    const [recipes, setRecipes] = useState([]); // store the list of recipes fetched based on the ingredients
    const [loading, setLoading] = useState(false); // manage the loading state, indicating if data fetching is in progress
    const [error, setError] = useState(null); // manage any errors that occur during data fetching
    const [expiryItems, setExpiryItems] = useState([]);  // store items that are near their expiration date
    const [noResults, setNoResults] = useState(false); // State to indicate if the search resulted in no recipes

    const [currentPage, setCurrentPage] = useState(1); // manage the current page number
    const recipesPerSearch = 20;  // define how many recipes to display per search
    const recipesPerPage = 5;   // define how many recipes to display per page

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem('myProducts')) || [];
        const expiredProducts = products.filter(product => calculateDaysUntilExpiry(product.expiryDate) === 0);
        setExpiryItems(expiredProducts);
    }, []);

    const handleSearch = (query) => {
        const apiKey = '4ef4f9544a3b4e51a1290e544f11bf61';
        const url = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${apiKey}&ingredients=${query}&number=${recipesPerSearch}`;

        setLoading(true);
        setError(null);
        setNoResults(false);
        setRecipes([]); // Reset recipes state before making the new request
        setCurrentPage(1); // Reset to first page on new search

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0) {
                    setNoResults(true);
                } else {
                    const processedRecipes = data.map(recipe => ({
                        id: recipe.id,
                        title: recipe.title,
                        image: recipe.image,
                        usedIngredients: recipe.usedIngredients.map(ing => ing.name),
                        missedIngredients: recipe.missedIngredients.map(ing => ing.name),
                        recipeUrl: `https://spoonacular.com/recipes/${recipe.title.replace(/ /g, "-")}-${recipe.id}`
                    }));
                    setRecipes(processedRecipes);
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const calculateDaysUntilExpiry = (expiryDate) => {
        const today = new Date();
        const expiry = new Date(expiryDate);
        today.setHours(0, 0, 0, 0);
        expiry.setHours(0, 0, 0, 0);
        const diffTime = expiry.getTime() - today.getTime();
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const handleFave = () => {
        const faveIngredients = expiryItems.map(item => item.name).join(',');
        handleSearch(faveIngredients);
    };

    const getExpiryItemsAsString = () => {
        return expiryItems.map(item => item.name).join(', ');
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, Math.ceil(recipes.length / recipesPerPage)));
    };

    const startIndex = (currentPage - 1) * recipesPerPage;
    const currentRecipes = recipes.slice(startIndex, startIndex + recipesPerPage);

    return (
        <>
            <h2>Recipe Search</h2>

            <section className="fave__searchBoxes">

                <div className="fave__searchBox">
                    <h3> Try fave button!</h3>
                    <button className="button__fave" onClick={handleFave}>Fave</button>
                </div>

                <div className="fave__searchBox">
                    <h4>or write what you want to use today!</h4>
                    <p>Items expiring today: {getExpiryItemsAsString()}!</p>
                    <input
                        type="text"
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        placeholder={`Enter ingredients here...`}
                    />
                    <button onClick={() => handleSearch(ingredients)}>Search for yourself</button>
                </div>

            </section>


            <div>
                {loading && <p className="error__msg error__msg--info error__msg--resize">Loading...</p>}
                {error && <p className="error__msg error__msg--resize">Error: {error}!</p>}
                {noResults &&
                    <p className="error__msg error__msg--info error__msg--resize">No matching recipes found.</p>}
            </div>

            {recipes.length > 0 && (
                <section className="fave__tableBox">
                    <table className="ingredient__table">
                        <thead>
                        <tr>
                            <th>Recipe</th>
                            <th>Have</th>
                            <th>Missing:</th>
                            <th>Link</th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentRecipes.map(recipe => (
                            <tr key={recipe.id}>
                                <td style={{fontWeight: 'bold', display: "flex", flexDirection: "column"}}>

                                    {recipe.title}
                                    <img src={recipe.image} alt={recipe.title} style={{width: "15rem"}}/>
                                </td>
                                <td>
                                    <ul>
                                        {recipe.usedIngredients.map((ing, index) => (
                                            <li key={index}>{ing}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {recipe.missedIngredients.map((ing, index) => (
                                            <li key={index}>{ing}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td><a href={recipe.recipeUrl} target="_blank" rel="noopener noreferrer">View recipe</a></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            )}


            {recipes.length > recipesPerPage && (
                <section className="fave__prevNext">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                    <p>Page {currentPage} of {Math.ceil(recipes.length / recipesPerPage)}</p>
                    <button onClick={handleNextPage} disabled={currentPage === Math.ceil(recipes.length / recipesPerPage)}>Next
                    </button>
                </section>
            )}
        </>
    );
};

export default RecipeSearch;
