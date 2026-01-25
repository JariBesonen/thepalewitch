 const { registerUser, userExists } = require("../Models/authModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUserController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and or password is missing" });
  }
  try {
    const usernameTaken = await userExists(username);
    if (usernameTaken) {
      return res.status(400).json({ error: "username already exists" }); //might be a 400
    }
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = await registerUser(username, hashedPassword);

    return res.status(201).json(newUser);
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server error from registerUserController" });
  }
};

const loginUserController = async (req, res) => {
  

  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and or password is missing" });
  }
  try {
    const usernameExists = await userExists(username);
    if (!usernameExists) {
      return res.status(404).json({ error: "username does not exist" });
    }

    const passwordsMatch = await bcrypt.compare(
      password,
      usernameExists.password
    );
    if (!passwordsMatch) {
      return res.status(400).json({ error: "passwords did not match" });
    }

    const token = jwt.sign({ id: usernameExists.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return res.status(200).json({ user: usernameExists, token });
  } catch (error) {
    res.status(500).json({ error: "error with loginUserController" });
  }
};

module.exports = { registerUserController, loginUserController };
