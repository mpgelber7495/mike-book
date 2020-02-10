const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
// const List = require("./models/list");

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
  res.render("posts");
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`server running on ${process.env.PORT || PORT}`);
});
