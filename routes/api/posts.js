var router = require("express").Router();
var Post = require("../../models/post");

router.get("/", async (req, res) => {
  const posts = await Post.all();
  res.json({ posts: posts });
});

router.post("/", async (req, res) => {
  const result = await Post.create(req.body);
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const post = await Post.getById(req.params.id);
  res.json(post);
});

router.put("/:id", async (req, res) => {
  const result = await Post.update(req.params.id, req.body);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await Post.delete(req.params.id);
  res.json(result);
});

module.exports = router;
