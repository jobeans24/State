const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://josiezobel:ssYrp4KFjNw3LqfZ@cluster0.7bvbkhn.mongodb.net/');

module.exports = mongoose.connection;
