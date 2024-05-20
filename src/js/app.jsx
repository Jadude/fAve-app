// OK


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// routes import
import MainLayout from "./layout/MainLayout.jsx";
import Home from "./layout/HomePage.jsx";
import AddProduct from "./layout/AddProduct.jsx";
import MyProductsDisplay from "./layout/MyProductsDisplay.jsx";
import Error404 from "./layout/Error404.jsx";
import MyRecipes from "./layout/MyRecipes.jsx";
import MyAccount from "./layout/MyAccount.jsx";


const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="fave" element={<Home/>}/>
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