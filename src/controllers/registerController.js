const User = require("../models/User");
const jwt = require("jsonwebtoken");

/*
User Register Contoller 
API: POST /api/auth/register
*/
async function registerController(req, res) {
  const { name, email, password } = req.body;

  //Checking if User Email already Exists
  const isEmailexists = await User.findOne({ email });
  if (isEmailexists)
    return res.status(400).json({ message: "Email already exists" });

  //Else Regestring the user
  try {
    const user = await User.create({
      name,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.cookie("token", token);
    res.status(201).json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = registerController;
