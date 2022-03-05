//import express
const express = require("express");

//instantiate the server
const app = express();


//server listens on port 3001
app.listen(3001, () => {
  console.log(`API server now on port 3001!`);
});
