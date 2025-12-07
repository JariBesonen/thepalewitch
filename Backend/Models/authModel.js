const pool = require("../db.js");
console.log("POOL CHECK:", pool);

const registerUser = async (username, password) => {
  console.log("DB URL:", process.env.DATABASE_URL);

  try {
    const query =
      "INSERT INTO public.users (username, password) VALUES ($1, $2) RETURNING *";
    const results = await pool.query(query, [username, password]);
    return results.rows[0];
  } catch (err) {
    console.log("POSTGRES INSERT ERROR:", err);
    throw err;
  }
};

const userExists = async (username) => {
  const query = "SELECT * FROM public.users WHERE username = $1";
  const results = await pool.query(query, [username]);
  return results.rows;
};

module.exports = { registerUser, userExists };
