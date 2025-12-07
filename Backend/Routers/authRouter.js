const express = require("express");
const router = express.Router();
const { registerUserController } = require("../Controllers/authController");


  router.post("/register", registerUserController);


module.exports = router;
