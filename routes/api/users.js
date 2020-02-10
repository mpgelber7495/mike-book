var router = require("express").Router();
var User = require("../../models/user");

router.get("/", async (req, res) => {
  const users = await User.all();
  res.json({ users: users });
});

router.post("/", async (req, res) => {
  const result = await User.create(req.body);
  res.json(result);
});

router.get("/:id", async (req, res) => {
  const user = await User.getById(req.params.id);
  res.json(user);
});

router.put("/:id", async (req, res) => {
  const result = await User.update(req.params.id, req.body);
  res.json(result);
});

router.delete("/:id", async (req, res) => {
  const result = await User.delete(req.params.id);
  res.json(result);
});

module.exports = router;
