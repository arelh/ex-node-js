const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h1> welcome</h1>");
});

app.get("/raw-html", (req, res) => {
  res.send("<h1>Welcome</h1>");
});
app.get("/users", (req, res) => {
  res.send([
    {
      name: "bob",
      age: 30,
      gender: "male",
    },
    {
      name: "dan",
      age: 60,
      gender: "male",
    },
  ]);
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
