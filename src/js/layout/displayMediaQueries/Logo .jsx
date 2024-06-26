import React, { useState, useEffect } from 'react';

const Logo = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 600);

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
                <h1 className="logo__decoration logo__font">FAVE</h1>
            )}

        </>
    );
};


export default Logo;