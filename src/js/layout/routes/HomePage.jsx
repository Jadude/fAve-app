// OK

import React, {useEffect, useState} from 'react';
import SaveLogin from "../../components/loginComponetns/SaveLogin.jsx";
import Login from "../../components/loginComponetns/Login.jsx";
import iconEarth from '../../../assets/icons/earth-svgrepo.svg';


const HomePage = () => {
// STATE
    const [userName, setUserName] = useState('');

    useEffect(() => {
        //  retrieve the userName from local storage if it exists
        const storedUsername = localStorage.getItem('username');
        if (storedUsername) {
            setUserName(storedUsername);
        }
    }, []);

// FUNCTION to handle login
    const handleLogin = (name) => {
        setUserName(name);
        // save the userName to local storage
        localStorage.setItem('username', name);
    };

    // UI
    return (
        <main className="outlet--container">
            <section className="main__section">
                <h2>Welcome to the Fave app!</h2>

                {/*ternary operator*/}
                {userName ? (
                    // truthy
                    <section className="main__section">
                        <article className="login__article">
                        <h3>Nice to see you: <Login username={userName}/>!</h3>
                        <p>Manage your products effectively! </p>
                        <p>Save money and food! </p>
                        <p>Good luck!</p>
                        </article>
                        <img style={{height: "15rem"}} src={iconEarth} alt="earth"/>
                        <p className="error__msg error__msg--info">Click on the menu above to go to the application.</p>
                    </section>
                ) : (
                    // falsy
                    <section className="main__section">
                        <SaveLogin onLogin={handleLogin}/>
                        <article className="login__article login__article--mod">
                            <p>Fave is a useful app that helps to effectively manage the contents of the fridge in order
                                to use up products before their best-before date. This app will inform you of food
                                products that are approaching their expiry date, and will then search and suggest
                                recipes containing the product to use, thanks to access to a recipe database. With fAve:
                                save time on meal planning and shopping, minimise food waste save money through
                                efficient use of products.</p>
                        </article>
                        <p className="error__msg error__msg--info error__msg--resize">Try it yourself!</p>
                    </section>

                    // onLogin = props to SaveLogin
                )}
            </section>
        </main>
    )
        ;
};

export default HomePage;