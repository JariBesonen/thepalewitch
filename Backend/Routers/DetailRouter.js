// Backend/Routers/DetailRouter.js
const express = require("express");
const router = express.Router();

// Destructure the function from the controller export
const { getHeroGameDetails } = require("../Controllers/DetailController");

// GET /api/details/getHeroGameDetails
router.get("/getHeroGameDetails", getHeroGameDetails);

module.exports = router;
