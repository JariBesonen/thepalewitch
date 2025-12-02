// Backend/Models/DetailModel.js
const pool = require("../db.js");

const getHeroSection = async () => {
  const query = "SELECT * FROM details WHERE id = 1";
  const result = await pool.query(query);
  return result.rows;
};

module.exports = { getHeroSection };
