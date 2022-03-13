//import mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://chl850405:L3tsc0de@cluster0.gbemj.mongodb.net/bl0g-p0st5?retryWrites=true&w=majority",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;