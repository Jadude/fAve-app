// OK

import React from 'react';

const Footer = () => {
    return (
        <footer className="properties footerProperties">
            <p>If you like this app, check out the others <a className="footer--msg" href="https://github.com/Jadude" target="_blank"
                                                             rel="noopener noreferrer">HERE</a>! </p>
            {/* rel for security*/}
        </footer>
    );
};

export default Footer;
