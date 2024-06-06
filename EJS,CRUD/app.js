const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.send("view engine", 'ejs');

app.get("/", (req, res) => {
    res.send("Hey");
})

const port = 3000;
console.log(`port is running ${port}`);