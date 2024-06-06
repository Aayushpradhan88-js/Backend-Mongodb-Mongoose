const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27014/usedb");

let userdatas = mongoose.Schema({
    name: String,
    email: String,
    photo: URL
})

mongoose.exports = mongoose.model("user", userdatas);