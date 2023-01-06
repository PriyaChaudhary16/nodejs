const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
require("./dbConnection");
global.sql =require("./dbConnection");
global.helper = require("./helper/helper")

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const apiRouting = require("./routes/apiRouting");
app.use("/api", apiRouting);
const port = process.env.PORT || 8000;
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

module.exports = app;
