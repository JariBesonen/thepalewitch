const { getHeroGameDetailsInDb } = require("../Models/DetailModel");

const getHeroGameDetails = async (req, res) => {
  try {
    const gameDetails = await getHeroGameDetailsInDb();
    if (!gameDetails) {
      return res
        .status(404)
        .json({ error: "was not able to get data from the model" });
    }
    return res.status(200).json(gameDetails);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "error with getHeroGameDetails in controller" });
  }
};

module.exports = { getHeroGameDetails };
