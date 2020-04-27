const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const app = express();

mongoose.connect("mongodb+srv://tsvika:94tZkBpZ0kCC2NWR@cluster0-dvwzz.mongodb.net/node-angular?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("connected to mongoDB!!"))
  .catch((rej) => console.log(rej));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/images", express.static(path.join("backend/images")));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', "GET, POST, PATCH, UPDATE, DELETE, PUT , OPTIONS");
  next();
});
app.use("/api/user", userRoutes);

module.exports = app;
