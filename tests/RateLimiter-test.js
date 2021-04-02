const Utils = require('../index');

const RL = new Utils.RateLimiter(3, 5000);

(async() => {
    for (i=1; i<1000000; i++) {
        console.log(`\r\nSent: ${i}`);
        RL.rateLimited((remainingLimit) => {
            console.log(`Delivered: ${i}`);
            console.log(`Remaining limit: ${remainingLimit}`)
        });
        await Utils.Sleep(100);
    }
})();