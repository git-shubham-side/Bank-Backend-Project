const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    //Email
    email: {
      type: String,
      required: [true, "Please Enter an email"],
      unique: [true, "Email already exists."],
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

    name: {
      type: String,
      required: [true, "Please Enter your name"],
      maxLength: [30, "Name cannot exceed 30 characters"],
      minLength: [4, "Name should have more than 4 characters"],
    },

    password: {
      type: String,
      required: [true, "Password is required for creating an account."],
      minLength: [8, "Password should be greater than 8 characters"],
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

//Hashing Password before Saving
userSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

//Custom method in the Schema for Check the password is correct or Not
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
