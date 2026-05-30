const mongoose = require("mongoose");

async function conn() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    await add();
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

userSchema.post("save", function () {
  console.log("---------------------", this);
});

const User = mongoose.model("User", userSchema);

async function add() {
  await User.create({ name: "dfdf", password: "justadded" });
  // let res = await User.find({ name: "lalalalla" });
  // console.log(res);
  await mongoose.disconnect();
}

conn();
