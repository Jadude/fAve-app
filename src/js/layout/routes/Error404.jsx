// OK

import React from 'react';
import icon404 from '../../../assets/icons/404_icon.svg';

const Error404 = () => {

    return (
        <main className="outlet--container">
            <section className="main__section">
                <h2> File not found, please turn back.</h2>
                <img style={{height: "50vh"}} src={icon404} alt="404" />
            </section>
        </main>
    );
};

export default Error404;
