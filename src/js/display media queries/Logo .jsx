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
        <div>
            {isWideScreen && (
                <h1>FAVE</h1>
            )}
        </div>
    );
};

export default Logo;