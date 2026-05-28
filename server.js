const app = require("./src/app");
const dotenv = require("dotenv").config({ override: true });
const connectToDB = require("./src/config/db");

connectToDB();

app.listen(process.env.PORT || 3000, () => {
  process.env.PORT
    ? console.log(
        `ENV : Server Started Successfully on http://localhost:${process.env.PORT} `,
      )
    : console.log("Server Started Successfully on http://localhost:3000");
});
