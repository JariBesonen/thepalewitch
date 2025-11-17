const express = require("express");
const Router = express.Router();
const DetailController = require("../Controllers/DetailController");

Router.get("/getHeroGameDetails", DetailController.getHeroGameDetails);

module.exports = Router;
