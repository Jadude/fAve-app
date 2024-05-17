import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// routes import
import MainLayout from "./MainLayout";
import Home from "./HomePage";

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<h2>404, please turn back.</h2>} />
            </Route>
        </Routes>
        </BrowserRouter>
    );
};

root.render(<App />);