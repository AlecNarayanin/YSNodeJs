const express = require("express");
const app = express();
const multer = require('multer');
const upload = multer();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.post('/test-doc', upload.none(), (req, res, next) => {
  const formData = req.body;
  console.log('form data', formData);
  res.sendStatus(200);
})

module.exports = app;
