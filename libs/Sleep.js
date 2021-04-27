/**
 * 
 * @param {number} miliseconds - Miliseconds.
 * @returns {Promise<void>}
 */
const Sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

module.exports = Sleep;
