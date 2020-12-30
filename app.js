const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/posts", (req, res) => {
  res.send("posts");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to our database!")
);
app.listen(3000);
