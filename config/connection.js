//import mongoose
const mongoose = require('mongoose');
//import express
const express = require("express");

//instantiate the server
const app = express();

//tells Mongoose which database we want to connect to
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/blog-posts', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// log mongo queries being executed
mongoose.set('debug', true);

//server listens on port 3001
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
