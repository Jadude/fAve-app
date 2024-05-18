import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkBase = (to, title) => {
    return (
        <NavLink className="nav__list__links"
                 to={to}
                 style={({isActive}) =>
                     isActive
                         ? {color: "$color-huntergreen"}
                         : {color: "darkblue"}
                 }
        >
            {title}
        </NavLink>
    );
};

export default NavLinkBase;