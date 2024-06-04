const express = require('express');
const app = express();
const userModel = require('./userModel');

app.get("/", (req, res) => {
    res.send("Hey my name is aayush pradhan");
})

app.get("/create", async (req, res) => {
    let create = await userModel.create({
        username: "Aayush",
        name: "Aayush Pradhan",
        address: "Itahari",
        age: 19
    })

    res.send(create);

})

//In this method we can read the how many user are there in the database.
app.get("/read", async (req, res) => {

    // find gives an array and findOne gives an object.
    let userRead = await userModel.find();

    res.send(userRead);

})

//In this method we can update the user details.
app.get("/update", async (req, res) => {
    let updateUser = await userModel.findOneAndUpdate(
        { username: "aayush" },
        { name: "aayush pradhan" },
        { address: "itahari" },
        { age: 19 });

    res.send(updateUser);

})

//In this method we can delete the user  from the database.
app.get("/delete", async (req, res) => {

    let userDelete = await userModel.fineOneAndDelete({ name: "Aayush" });

    res.send(userDelete);

})

const port = 3000;
console.log(`the port is running${port}`)