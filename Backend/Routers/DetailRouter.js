// Backend/Routers/DetailRouter.js
const express = require("express");
const router = express.Router();

// Destructure the function from the controller export
const { getHeroSectionController } = require("../Controllers/DetailController");

// GET /api/details/getHeroGameDetails
router.get("/hero-section", getHeroSectionController);

module.exports = router;
