const mongoose = require('mongoose');
require('dotenv').config();

const URI = 'mongodb+srv://POHMONSEY22:n85EBtW7ogmWWqFa@adso2903013.9bfnx.mongodb.net/JP'
mongoose.connect(URI);

module.exports = mongoose;