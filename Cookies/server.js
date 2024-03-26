const express = require("express");
const app = express();
const users = require("./routes/post.js");
const posts = require("./routes/user.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.get("/getcookies", (req, res) => {
    res.cookie("Good", "morning");
    res.cookie("hello", "Everyonr");
    res.send("Sent some cookies");
});

app.get("/greet", (req, res) => {
  let { name = "Anonymous" } = req.cookies;
  res.send(`Hi, ${name}`);
});

app.get("/", (req, res) => {
  console.dir(req.cookies); // Parsing cookies
  res.send("Hi I am root!");
});



app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
  console.log("Server is listening to 3000 port");
});