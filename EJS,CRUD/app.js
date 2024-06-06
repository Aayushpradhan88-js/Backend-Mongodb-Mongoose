const express = require('express');
const app = express();
const path = require('path');
const userModel = require('../Models/user')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.send("view engine", 'ejs');

app.get("/", (req, res) => {
    res.send("Creating the real time image uploading webapplication with mongodb and express");
})

//This is for home page of application
app.get("/home", (req, res) => {
    res.render("index");
})

//This route is for the existing user details
app.get("/read", (req, res) => {
    res.render("read");
})

//This route is for taking user details and making profile in realtime it inclued - name, email and photo
app.post("/create", (req, res) => {
    res.render("read");
})

const port = 3000;
console.log(`port is running ${port}`);