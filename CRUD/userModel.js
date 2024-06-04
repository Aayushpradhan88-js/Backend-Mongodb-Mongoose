const mongoose = require('mongoose');
mongoose.connect("mongodb:// 127.0.0.1:2704 /database pratice");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    address: String,
    age: Number
})

mongoose.exports = mongoose.model("user", userSchema);