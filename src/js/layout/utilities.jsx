// HELPER FUNCTION for retrieving components from localStorage
export const getSavedIngredients = () => {
    // get data saved from localStorage
    const savedIngredients = localStorage.getItem('myProducts');
    // parses data from JSON format to JS object or empty array if null
    return savedIngredients ? JSON.parse(savedIngredients) : [];
};
