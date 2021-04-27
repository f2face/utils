class Repeat {
    /** @type {number} */
    repeatEvery;

    _interval;
    _callback;

    /**
     * Create `Repeat` instance.
     * @param {number} repeatEvery - In milliseconds.
     * @returns {Repeat} `Repeat` instance.
     */
    static create(repeatEvery) {
        return new this(repeatEvery);
    }

    /**
     * Create `Repeat` instance.
     * @param {number} repeatEvery - In milliseconds
     */
    constructor(repeatEvery) {
        this.repeatEvery = repeatEvery;
    }

    /**
     * 
     * @param {number} repeatEvery - In milliseconds
     * @returns {Repeat} `Repeat` instance
     */
    setRepeatInterval(repeatEvery) {
        if (!repeatEvery > 0 || isNaN(repeatEvery)) {
            throw new Error('`repeatEvery` argument must positive integer.');
        }

        this.repeatEvery = repeatEvery;
        return this;
    }

    /**
     * Start delayed.
     * @param {Function} callback 
     */
    start(callback) {
        if (typeof callback != 'function') {
            throw new Error('Invalid callback.');
        }

        this.stop();
        this._callback = callback;
        this._interval = setInterval(this._callback, this.repeatEvery);
        return this;
    }

    /**
     * Start immediately.
     * @param {Function} callback 
     */
    startImmediately(callback) {
        if (typeof callback != 'function') {
            throw new Error('Invalid callback.');
        }

        this.stop();
        this._callback = callback;
        this._callback();
        this._interval = setInterval(this._callback, this.repeatEvery);
        return this;
    }

    /**
     * Stop.
     */
    stop() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }

    /**
     * Restart delayed.
     * @returns {Repeat} `Repeat` instance.
     */
    restart() {
        if (!this._callback || isNaN(this.repeatEvery) || this.repeatEvery < 1) {
            throw new Error('Cannot restart.')
        }

        this.stop();
        this._interval = setInterval(this._callback, this.repeatEvery);
        return this;
    }

    /**
     * Restart immediately.
     * @returns {Repeat} `Repeat` instance.
     */
    restartImmediately() {
        if (!this._callback || isNaN(this.repeatEvery) || this.repeatEvery < 1) {
            throw new Error('Cannot restart.')
        }

        this.stop();
        this._callback();
        this._interval = setInterval(this._callback, this.repeatEvery);
        return this;
    }
}

module.exports = Repeat;
