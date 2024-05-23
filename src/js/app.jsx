// OK
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// routes import
import MainLayout from "./layout/main/MainLayout.jsx";
import AddProduct from "./layout/routes/AddProduct.jsx";
import MyProductsDisplay from "./layout/routes/MyProductsDisplay.jsx";
import Error404 from "./layout/routes/Error404.jsx";
import MyRecipes from "./layout/routes/MyRecipes.jsx";
import MyAccount from "./layout/routes/MyAccount.jsx";
import HomePage from "./layout/routes/HomePage.jsx";
import FaveProducts from "./layout/routes/FaveProducts.jsx";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="fave" element={<FaveProducts />}/>
                <Route path="addproduct" element={<AddProduct />}/>
                <Route path="myproducts" element={<MyProductsDisplay />}/>
                <Route path="myrecipes" element={<MyRecipes/>}/>
                <Route path="myaccount" element={<MyAccount />}/>
                <Route path="*" element={<Error404 />}/>
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

root.render(<App/>);