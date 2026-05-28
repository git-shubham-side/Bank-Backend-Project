const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    lowercase: true,
    validate: {
      validator: validator.isEmail,
      message: "Please fill a valid email address",
    },
    // match: [
    //   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    //   "Please fill a valid email address",
    // ],
  },
});

const User = mongoose.model("User", userSchema);

async function check() {
  try {
    let user = new User({ email: "rathodshubham@gmail.com" });
    await user.validate();
    console.log("Email is Valid..........");
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

check();
