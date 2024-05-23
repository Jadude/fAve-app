// OK

import React from 'react';
import NavLinkBase from "./NavLinkBase.jsx";
import Logo from "../displayMediaQueries/Logo .jsx";
import Slogan from "../displayMediaQueries/Slogan .jsx";

const Header = () => {
    return (

        <header className="properties headerProperties">
            <Logo />
            <nav>
                {/* navlink*/}
                <ul className="nav__list">
                    <li className="nav__list__links">{NavLinkBase("/fave", "Fave search ")} </li>
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
