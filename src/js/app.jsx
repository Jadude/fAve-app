// OK


import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// routes import
import MainLayout from "./layout/main layout/basic/MainLayout.jsx";
import Home from "./layout/main layout/routes/HomePage.jsx";
import AddProduct from "./layout/main layout/routes/AddProduct.jsx";
import MyProductsDisplay from "./layout/main layout/routes/MyProductsDisplay.jsx";
import Error404 from "./layout/main layout/routes/Error404.jsx";
import MyRecipes from "./layout/main layout/routes/MyRecipes.jsx";
import MyAccount from "./layout/main layout/routes/MyAccount.jsx";
import HomePage from "./layout/main layout/routes/HomePage.jsx";
import Fave from "./layout/main layout/routes/Fave.jsx";


const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="fave" element={<Fave />}/>
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