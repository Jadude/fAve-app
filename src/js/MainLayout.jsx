import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

const MainLayout = () => {
    const NavLinkBase = (to, title) => {
    return (
        <NavLink
            to={to}
            style={({isActive}) =>
                isActive
                    ? {color: "green", fontSize: "1rem"}
                    : {color: "lime", fontSize: "$base-font-size"}
            }
        >
            {title}
        </NavLink>
    );
};

return (
    <div>
        <header>
            <p>HEADER</p>

            <h1>fAve</h1>
            <p>Save your food from ending up in the rubbish!</p>
            <nav>
                <ul>
                    <li>{NavLinkBase("/", "Home")}</li>
                    <li>{NavLinkBase("/myfridge", "My fridge")}</li>
                    <li>{NavLinkBase("/myrecipes", "My recipes")}</li>
                </ul>
            </nav>
        </header>
        <p>OUTLET</p>
        <Outlet/>
        <footer>
            <p>FOOTER</p>
            <p>Do you like this app? Check out my other apps here! </p>
        </footer>
    </div>
);
};

export default MainLayout;