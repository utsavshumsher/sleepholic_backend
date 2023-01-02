const express = require('express');
const morgan = require('morgan');
const fileUpload = require("express-fileupload")

// Routes Import
const userRoutes = require('./routes/userRoutes.js')



const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(fileUpload({ useTempFiles: true }))

app.get("/", (req, res) => {
    res.send("Welcomee to SleepHolic API");
    res.end();
})

// Routes
app.use("/user", userRoutes);


module.exports = app