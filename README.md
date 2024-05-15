# fAve
 **Save your food from ending up in the rubbish!**

fAve is a useful app that helps to effectively manage the contents of the fridge in order to use up products before their best-before date. This app
will inform you of food products that are approaching their expiry date, and will then search and suggest recipes containing the product to use, thanks to access to a recipe database. With fAve:
save time on meal planning and shopping,
minimise food waste
save money through efficient use of products.

**Every day, 3.5 million tonnes of food are wasted worldwide.** 

**You can make a difference!**

 ***Try it for yourself!***





> **The development of the application used:**
> * SCSS
> * React.JS
> * Babel



## Installation instructions:

### Cloning the repository:
Clone the fAve repository to your local machine using the following command in terminal:

```
git clone https://github.com/Jadude/fAve-app.git
```

### Installing dependencies:
Navigate to the fAve project directory and then install all necessary dependencies using the npm package manager. In the terminal, type:

```
cd fAve
npm install
```
This will install all required packages, including React, React DOM, Sass and developer tools such as ESLint and Prettier.


### Adding the Babel plugin:
Add the Babel plugin to the project, which is required to support the new JavaScript features. In the terminal, type:
```
npm install --save-dev @babel/plugin-proposal-class-properties
```

### Launching the project:
After installing the dependencies, you can launch the project. In the terminal, type:
```
npm start
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

Expiry date management: Track expiry dates of products in the fridge and receive notifications about products approaching their expiry date. 
Finding recipes: Find a recipe with a specific product and use it when preparing a meal.

### 4. Special features:

In future:
Automatic recipe search: The fAve app automatically searches for recipes that can be prepared with the products available in the fridge. Simply select the products and fAve will suggest matching recipes.
Food consumption analysis: fAve offers a food consumption analysis function that helps you track which products are consumed most often, which can help you plan your shopping and reduce food waste.



## FAQ:

> Q1: How can I add new products to my fridge in the fAve app?

Answer: To add new products to your fridge in the fAve app, log in to your account and click the 'Add product' button . Then enter the product name and expiry date. 

> Q2: Can I set notifications in the fAve app when products are about to expire?

Answer: Currently no. For the time being, simply press the "fAve!" button, which will display products with an expiry date in 2 days. In the future, the fAve app will offer a function to notify you when products are about to expire. When you add a product to fAve, you will be able to set up a notification to receive email or push notifications on your mobile device the day before the product expiry date.

> Q3: Can I share recipes from the fAve app with other users?

Answer: Currently no.  In the future, the fAve app will allow recipes to be shared with other users.



## Spoonacular Food API Documentation:

### API overview:
The Spoonacular Food API is an advanced food data management tool, offering a wide range of features such as recipe search, food information, nutrient analysis and much more.

### Endpoints available within the Spoonacular Food API:


*Recipe search:*

GET /recipes/search 

* Description: Searches for recipes based on specific criteria such as ingredients, culinary categories, diet types and more. 
* Query parameters:
- query: (optional) Search query, e.g. recipe name.
- cuisine: (optional) Cuisine category, e.g. Italian, French.
- diet: (optional) Type of diet, e.g. vegetarian, vegan.
- number: (optional) Number of recipes to be returned.
* Expected response: A list of recipes that meet the specified criteria. 



*Retrieving food product information:*

GET /food/products/{id} 
* Description: Retrieves information about a specific food product based on its identifier. 
* Query parameters:/
- id: (required) The identifierof the food product. 
* Expected response: Specific information about the food product, such as name, nutrients, allergen information, etc. 
 

### Authorisation and security:
To use the Spoonacular Food API, an API key is required to authorise requests. The API key must be included in the query header as an authorisation parameter.
```
X-Spoonacular-API-Key: your_api_key
```
> [!NOTE]
> Make sure you follow and adhere to the Spoonacular Food API usage policy to avoid access restrictions or blocking.
