const express = require('express');
const app = express();
const userSchema = require('./userSchema');
const { name } = require('ejs');
// const { name } = require('ejs');

app.get("/", (req, res) => {
    res.send("Hey my name is aayush pradhan");
})

app.get("/create", async (req, res) => {
    let create = await userSchema.create({
        username: "Aayush",
        name: "Aayush Pradhan",
        address: "Itahari",
        age: 19
    })

    res.send(create)
})

app.get("/update", async (req, res) =>{
    let updateUser = await userSchema.findOneUpdate({username:"aayush"}, {name: "aayush pradhan"}, {address:"itahari"}, {age:19});
    res.send(updateUser);
})

const port = 3000;
console.log(`the port is running${port}`)