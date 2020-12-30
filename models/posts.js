const mongoose = require("mongoose");

const PostSchemma = monngoose.schemma({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("posts");
