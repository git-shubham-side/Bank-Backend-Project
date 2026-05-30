const mongoose = require("mongoose");
const validator = require("validator");

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

const User = mongoose.model("User", userSchema);
