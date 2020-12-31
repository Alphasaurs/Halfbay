const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");
const app = express();

const postsRoute = require("./routes/posts");

app.use(cors());
app.use(bodyParser.json());
app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("Homepage");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to our database!")
);
app.listen(3000);
