const express = require("express"),
  path = require('path'),
  app = express(),
  cors = require('cors'),
  bodyParser = require("body-parser"),
  modules = require('./api/configs/modules');

//to format the request in json format inside req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//including/permission for nodemodules
app.use(express.static(path.join(__dirname)));

app.use(cors());

//to load the page dynamically based on the config module file
modules.moduleData.map((value) => {
  app.use(value.inputUrl, require(value.routingAddress));
})

//to handle the errors
app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  if (req.method == 'GET') {
    res.json({
      status: false,
      message: "Only POST hit accepted"
    })
  }
  else {
    res.json({
      status: false,
      message: "No service Found!!"
    })
  }
});

// //to support for POST 
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});


module.exports = app;
