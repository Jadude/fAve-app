// OK

import React from 'react';
import NavLinkBase from "./NavLinkBase.jsx";
import Logo from "../../display media queries/Logo .jsx";
import Slogan from "../../display media queries/Slogan .jsx";

const Header = () => {
    return (

        <header className="properties headerProperties">
            <Logo />
            <nav className="nav__bar">
                {/* navlink*/}
                <ul className="nav__list">
                    <li className="nav__list__links">{NavLinkBase("/fave", "Fave products")} </li>
                    <li className="nav__list__links">{NavLinkBase("/addproduct", "Add product ")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myproducts", "My products")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myrecipes", "My recipes")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myaccount", "My account")}</li>
                </ul>
            </nav>
            <Slogan />
        </header>
    );
};

export default Header;
