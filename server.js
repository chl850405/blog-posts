//import express
const express = require("express");
//import mongoose
const mongoose = require('mongoose');
//initialize api route
const routes = require("./routes/posts-route");

// inialize the server
const app = express();
//set portal
const PORT = process.env.PORT || 3001 ;

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//set up static
app.use(express.static("public"));

//api middleware
app.use(routes);

//connects to mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bl0g-p0st5', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.set('debug', true);

//starts server
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));









