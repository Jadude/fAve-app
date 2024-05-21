// OK

import React from 'react';
import NavLinkBase from "../elements/NavLinkBase.jsx";

const Header = () => {
    return (

        <header className="properties headerProperties">
            <nav>
                {/* navlink*/}
                <ul className="nav__list">
                    <li className="nav__list__links">{NavLinkBase("/fave", "FAVE")} </li>
                    <li className="nav__list__links">{NavLinkBase("/addproduct", "Add product ")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myproducts", "My products")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myrecipes", "My recipes")}</li>
                    <li className="nav__list__links">{NavLinkBase("/myaccount", "My account")}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
