const express = require("express");
require("./db/mongoose");
//const locationrouter = require("./routers/location");
const user = require("./routers/auth");

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(user);

app.listen(port, () => {
  console.log("Sever is up on port" + port);
});
