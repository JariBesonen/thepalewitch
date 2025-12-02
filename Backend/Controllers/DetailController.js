// Backend/Controllers/DetailController.js
const { getHeroSection } = require("../Models/DetailModel");

const getHeroSectionController = async (req, res) => {
  try {
    const gameDetails = await getHeroSection();

    if (!gameDetails || gameDetails.length === 0) {
      return res
        .status(404)
        .json({ error: "was not able to get data from the model" });
    }

    return res.status(200).json(gameDetails);
  } catch (error) {
    console.error("getHeroGameDetails ERROR:", error);
    return res
      .status(500)
      .json({ error: "error with getHeroGameDetails in controller" });
  }
};

module.exports = { getHeroSectionController };
