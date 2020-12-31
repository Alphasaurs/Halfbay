const express = require("express");
const router = express.Router();

const Post = require("../models/posts");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const newPost = await post.save();
    res.json(newPost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:postid", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:postid", async (req, res) => {
  try {
    const deletePost = await Post.remove({ _id: req.params.postid });
    res.json(deletePost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:postid", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postid },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = router;
