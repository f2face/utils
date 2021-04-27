const Utils = require('../index');

const RL = new Utils.RateLimiter(3, 2000);

(async() => {
    for (i=1; i<1000; i++) {
        console.log(`\r\nSent: ${i}`);
        RL.rateLimited((remainingLimit) => {
            console.log(`Delivered: ${i}`);
            console.log(`Remaining limit: ${remainingLimit}`)
            if (i > 100)
                RL.resetLimit();
        });
        await Utils.Sleep(100);
    }
})();
