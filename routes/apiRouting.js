const express = require("express");
const router = express.Router();
const path = require("path");
// global.node_validator = require('node-input-validator');
const usersList = require('../controller/userController')

router.get("/", (req, res) => {
  res.send("Welcome to api");
});
//** For users
router.post("/addUser",usersList.addUser );
router.get("/getAllUsers",usersList.getAllUsers );

module.exports = router;