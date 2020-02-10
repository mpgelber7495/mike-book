const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const Post = require("./models/post");
const User = require("./models/user");

const PORT = 8080;

const app = express();
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));
app.use(require("./routes"));

app.get("/", async (req, res) => {
  // const lists = await List.all();
  res.render("login");
});

app.get("/signup", async (req, res) => {
  // const lists = await List.all();
  res.render("signup");
});

app.get("/posts", async (req, res) => {
  let posts = await Post.all();
  let users = await User.all();

  posts.map(post => {
    users.map(user => {
      if (user.id === post.user_id) {
        post.nickname = user.nickname;
      }
    });
  });

  posts.reverse();
  res.render("posts", { posts });
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
