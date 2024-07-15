const env = require("../env");
const express = require("express");
const app = express();

app.get("/port", (req, res) => {
  res.send(`Server is Running On ${env.PORT}`);
});

app.listen(env.PORT, () => {
  console.log(`Server is Running On ${env.PORT}`);
});
