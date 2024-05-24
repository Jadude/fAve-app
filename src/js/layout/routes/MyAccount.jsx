// OK

import React, {useEffect, useState} from 'react';
import Login from "../../components/loginComponetns/Login.jsx";

const MyAccount = () => {

    const [userName, setUserName] = useState('');
    useEffect(() => {
        //  retrieve the userName from local storage if it exists
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUserName(storedUsername);
        }
    }, []);

    return (
        <main className="outlet--container">
            <section className="main__section">
                <h2>My account - soon!</h2>
                <p className="error__msg--info error__msg error__msg--resize">Logged-in user: <Login username={userName}/></p>
            </section>
        </main>
    );
};

export default MyAccount;