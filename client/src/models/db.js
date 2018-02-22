var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:admin24@ds117878.mlab.com:17878/heroku_c7xbpzdb' || process.env.MONGODB_URI);


module.exports = {
    User: require('./user'),
    Trail: require('./trail')
};