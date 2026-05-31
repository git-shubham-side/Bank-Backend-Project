const User = require("../models/User");
const jwt = require("jsonwebtoken");

/**
 * - User Login Controller
 * - POST /api/auth/login
 */

async function loginController(req, res) {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email }).select("+password");

    if (!user)
      return res.status(401).json({ message: "Email or Password is Invalid!" });

    //Checking password entred is corrent or not
    const validPassword = await user.comparePassword(password);
    if (!validPassword)
      return res.status(400).json({ message: "Please enter valid password." });

    //Creating JWT token for the User
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.cookie("token", token);
    res.status(200).json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Internel server error! please try again later." });
  }
}
module.exports = loginController;
