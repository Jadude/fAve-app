export const calculateDaysUntilExpiry = (expiryDate) => {
    const today = new Date(); // get today's date
    const expiry = new Date(expiryDate); // convert the provided expiry date string to a Date object

    // set the time of both dates to midnight (00:00:00) to ensure only the date part is compared
    today.setHours(0, 0, 0, 0);
    expiry.setHours(0, 0, 0, 0);

    // console.log(`Today: ${today}, Expiry: ${expiry}`); // debug logs

    const diffTime = expiry.getTime() - today.getTime(); // calculate the difference in time in milliseconds
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //convert the time difference to days and round up
};