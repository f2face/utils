class RateLimiter {
    /**
     * 
     * @param {number} freq - Frequency per interval.
     * @param {number} interval - Interval time in miliseconds.
     */
    constructor(freq, interval) {
        let _setTimeout = null;
        let _done = 0;

        this.state = null;

        /**
         * Execute blocks of code with rate limit.
         * @param {Function} callback - Block code to apply rate limit to.
         * @returns {void}
         */
        this.rateLimited = (callback) => {
            if (_setTimeout == null) {
                _setTimeout = setTimeout(() => {
                    this.resetLimit();
                }, interval);
            }

            if (freq > 0 && _done < freq && _setTimeout != null) {
                _done++;
                if (typeof callback === 'function') {
                    /** @type {number} - Number of remaining limit. */
                    let remainingLimit = freq - _done;
                    callback(remainingLimit);
                }
            }
        }

        /**
         * Reset limit.
         * @returns {void}
         */
        this.resetLimit = () => {
            clearTimeout(_setTimeout);
            _setTimeout = null;
            _done = 0;
        }

        /**
         * Revert limit.
         * @returns {void}
         */
        this.revertLimit = () => {
            clearTimeout(_setTimeout);
            _setTimeout = null;
            if (_done > 0) {
                _done--;
            }
        }
    }
}

module.exports = RateLimiter;
