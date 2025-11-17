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
    console.error("getHeroGameDetails ERROR:", error); // 👈 add this
    return res
      .status(500)
      .json({ error: "error with getHeroGameDetails in controller" });
  }
};
