class RateLimiter {
    /**
     * 
     * @callback somethingToLimt Block code to apply rate limit to.
     * @param {number} remainingLimit Number of remaining limit.
     */

    /**
     * 
     * @param {number} freq Frequency per interval.
     * @param {number} interval Interval time in miliseconds.
     */
    constructor(freq, interval) {
        let _setTimeout = null;
        let _done = 0;

        /**
         * 
         * @param {somethingToLimt} callback 
         */
        this.rateLimited = (callback) => {
            if (_setTimeout == null) {
                _setTimeout = setTimeout(() => {
                    clearTimeout(_setTimeout);
                    _setTimeout = null;
                    _done = 0;
                }, interval);
            }

            if (freq > 0 && _done < freq && _setTimeout != null) {
                _done++;
                if (typeof callback === 'function')
                    callback(freq - _done);
            }
        }
    }
}

module.exports = RateLimiter;