const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/usedb");

const userdatas = mongoose.Schema({
    name: String,
    email: String,
    photo: String
})

module.exports = mongoose.model('user', userdatas);