import React from 'react';
import NavLinkBase from "../elements/NavLinkBase.jsx";

const Header = () => {
    return (

        <header className="properties headerProperties">

            <section>
                <div className="logo">
                <img src="../../assets/icons/leaf-solid.svg" alt="fave-icon"/>
                <h1>fAve</h1>
                </div>
                <p className="slogan">Save your food from ending up in the rubbish!</p>
            </section>


            <nav>
                <ul className="nav__list">
                    <li>{NavLinkBase("/", "Home")}</li>
                    <li>{NavLinkBase("/myfridge", "My fridge")}</li>
                    <li>{NavLinkBase("/myrecipes", "My recipes")}</li>
                </ul>
            </nav>
            <section>Login</section>
        </header>
    );
};

export default Header;
