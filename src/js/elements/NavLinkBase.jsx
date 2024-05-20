// ok

import React from 'react';
import {NavLink} from "react-router-dom";

const NavLinkBase = (to, title) => {
    return (
        <NavLink className="nav__list__a"
                 to={to}
                 style={({isActive}) =>
                     isActive
                         ? {color: "rgb(203, 222, 177"}
                         : {color: "white"}
                 }
                 end
        >
            {title}
        </NavLink>
    );
};

export default NavLinkBase;