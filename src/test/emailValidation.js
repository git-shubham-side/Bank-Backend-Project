const User = require("../models/User");

async function check() {
  try {
    let user = User({ email: "rathodshubham@gmail.com" });
    await user.validate();
    console.log("Email is Valid..........");
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

check();
