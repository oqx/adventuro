/**
 * @summary Calculates minutes until arrival.
 * 
 * @param {Date} date 
 * 
 * @returns {number} Minutes
 */
export const getMinutesBetween = (date) => {
    var diff = date.getTime() - new Date().getTime();
    return `${Math.round(diff / 60000)} mins`;
}