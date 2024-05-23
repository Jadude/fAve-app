// OK

import React from 'react';
import { calculateDaysUntilExpiry} from "../../utilities/calculateDaysUntilExpiry.jsx";

// ELEMENT: CALCULATES AND DISPLAYS THE NUMBER OF DAYS TO EXPIRE
const DaysUntilExpiry = ({ expiryDate }) => {

// function to condition
const daysUntilExpiryForCondition = calculateDaysUntilExpiry(expiryDate);

// CONDITION: Throw away ! / Use today! / days to expire
    return <>{daysUntilExpiryForCondition < 0 ? 'You should bin it!' : daysUntilExpiryForCondition === 0 ? 'Use today!' : `${daysUntilExpiryForCondition}`}</>;
    // return <>{daysUntilExpiryForCondition}</>;
};

export default DaysUntilExpiry;