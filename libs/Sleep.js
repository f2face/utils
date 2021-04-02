/**
 * 
 * @param {number} miliseconds Miliseconds.
 * @returns {Promise}
 */
const Sleep = (miliseconds) => {
    return new Promise(resolve => setTimeout(resolve, miliseconds));
}

module.exports = Sleep;