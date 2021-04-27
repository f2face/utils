const Utils = require('../index');

let a = Utils.Repeat.create(1000).startImmediately(() => {
    console.log('1 immediately');
});

let b = Utils.Repeat.create(5000).start(() => {
    console.log('5 delayed');
    a.start(() => {
        console.log('1 delayed override');
    });
});
