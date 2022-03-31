var moment = require('moment');

var now = moment(); 
console.log(now.format('MMMM Do YYYY, h:mm:ss a'));

var future = moment([2030, 10, 30, 15, 50, 10]);
console.log(future.format('MMMM Do YYYY, h:mm:ss a'));