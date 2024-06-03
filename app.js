const express = require('express');
const app = express();
const userSchema = require('./userSchema');

userSchema.create = 

app.get("/", (req, res) => {
    res.send("Hey my name is aayush pradhan");
})

const port = 3000;
console.log(`the port is running${port}`)