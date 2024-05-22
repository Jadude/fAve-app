import React, { useState, useEffect } from 'react';

const Slogan = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1200);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth > 1200);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isWideScreen && (
                <h5 className="header__bonusText"> FAVE = Food sAVE!</h5>
            )}
        </div>
    );
};

export default Slogan;