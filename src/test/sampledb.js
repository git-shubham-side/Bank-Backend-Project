const mongoose = require("mongoose");

async function conn() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    add();
  } catch (err) {
    console.log(err);
  }
}

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model("User", userSchema);

async function add() {
  // let user3 = await User.create({ name: "lalalalla", password: "lalalalal" });
  // console.log(user3);
  let res = await User.find({ name: "lalalalla" });
  console.log(res);
  await mongoose.disconnect();
}

conn();
