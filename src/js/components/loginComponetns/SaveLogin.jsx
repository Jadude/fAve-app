import React, { useState } from 'react';

const SaveLogin = ({ onLogin }) => {
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username) {
            onLogin(username);
        }
    };

    return (
        <>
            <form   style={{
                padding: "0.5rem",
                marginBottom: "1rem",
            }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username!"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit" id="login-button">Login</button>
            </form>
        </>
    );
};

export default SaveLogin;
