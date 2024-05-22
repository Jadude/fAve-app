import React, { useState, useEffect } from 'react';

const Logo = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);
    const [isWideScreenWider, setIsWideScreenWider] = useState(window.innerWidth > 900);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 600);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {isWideScreen && (
                <h1 className="header__bonusText">FAVE</h1>
            )}

        </>
    );
};


export default Logo;