# FAVE
 **Save your food from ending up in the rubbish!**

fAve is a useful app that helps to effectively manage the contents of the fridge in order to use up products before their best-before date. This app
will inform you of food products that are approaching their expiry date, and will then search and suggest recipes containing the product to use, thanks to access to a recipe database. With FAVE:
save time on meal planning and shopping,
minimise food waste
save money through efficient use of products.

**Every day, 3.5 million tonnes of food are wasted worldwide.** 

**You can make a difference!**

 ***Try it for yourself!***





> **The development of the application used:**
> * SCSS
> * React.JS
> * React Router

## Explore my app:

If you want to see how my application works in action, you can check it out [here](https://6650564a9880de00080e1a01--classy-custard-973f38.netlify.app/).


## Installation instructions:

### Cloning the repository:
Clone the fAve repository to your local machine using the following command in terminal:

```
git clone https://github.com/Jadude/fAve-app.git
```

### Installing dependencies:
Navigate to the fAve project directory and then install all necessary dependencies using the npm package manager. In the terminal, type:

```
cd fAve-app
npm install
```
This will install all required packages, including React, React DOM, Sass and developer tools such as ESLint and Prettier.


### Launching the project:
After installing the dependencies, you can launch the project. In the terminal, type:
```
npm run dev
```
This will start the FreshFridge application in developer mode. Then open a web browser and navigate to http://localhost:3000 to use the application.



After following the steps above, the fAve project should be ready to use on your device!

> [!TIP]
> If any problems or questions arise during installation, don't hesitate to contact me. I will be happy to help!*



## Operating instructions for the fAve application:

### 1. Basic operation:

To start using the fAve application, simply open a web browser and navigate to http://localhost:3000 (if using a local installation).
Once the home page has loaded, you will be able to see the application interface.

### 2. Create a user account:

The first time you launch the application, you will be asked to create a user account. Fill in the registration form with your username.
After registration, the browser will remember your account.

### 3. Example usage scenarios:

Expiry date management: Track expiry dates of products in the fridge. 
Finding recipes: Find a recipe with a specific product and use it when preparing a meal.
Automatic recipe search: The fAve app automatically searches for recipes that can be prepared from available products that are expiring by date.

### 4. Special features:

In future:
Food consumption analysis: fAve offers a food consumption analysis function that helps you track which products are consumed most often, which can help you plan your shopping and reduce food waste.



## FAQ:

> Q1: How can I add new products to my fridge in the FAVE app?

Answer: To add new products to your fridge in the fAve app, log in to your account and click the 'AddProduct product' button . Then enter the product name and expiry date. 

> Q2: Can I set notifications in FAVE app when products are about to expire?

Answer: Currently no. This information is visible in the table in the tab "My prodcuts".

> Q3: Can I share recipes from the fAve app with other users?

Answer: Currently no.  In the future, the fAve app will allow recipes to be shared with other users.



## Spoonacular Food API Documentation:

### API overview:
The Spoonacular Food API is an advanced food data management tool, offering a wide range of features such as recipe search, food information, nutrient analysis and much more.

### Enpoint used in application:


**Description:**
Retrieves recipes that can be made with the specified ingredients. This endpoint is useful for finding recipes to use up items you already have in your pantry, especially those nearing their expiration date.

**Query parameters:**
ingredients (required): A comma-separated list of ingredients you have. For example, "apples,flour,sugar".
number (optional): The number of recipes to be returned.
limitLicense (optional): Whether to only show recipes with an open license (boolean).
ranking (optional): Whether to minimize missing ingredients (1) or maximize used ingredients (2) in the recipe.
ignorePantry (optional): Whether to ignore typical pantry items, such as salt, pepper, and water (boolean).

**Expected response:**
A list of recipes that can be made with the provided ingredients, including details such as the recipe title, ID, used ingredients, and missing ingredients.

 
### Authorisation and security:
To use the Spoonacular Food API, an API key is required to authorise requests. The API key must be included in the query header as an authorisation parameter.
```
X-Spoonacular-API-Key: your_api_key
```
Account on sponcalcr api can set up [here](https://spoonacular.com/food-api).

> [!NOTE]
> Make sure you follow and adhere to the Spoonacular Food API usage policy to avoid access restrictions or blocking.
