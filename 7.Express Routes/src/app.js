const express = require("express");

const app = express();
// console.log(__dirname);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "./index.html");
  
});



// app.get("", (req, res) => {
//   res.send("<h1> welcome</h1>");
// });

app.get("/help", (req, res) => {
  res.send({
    name: "arel",
    age: 30,
  });
});
app.get("/about", (req, res) => {
  res.send("<h1> about our web</h1>");
});
app.get("/weather", (req, res) => {
  res.send({
    forecast: "israel",
    location: "tel-aviv",
  });
});

app.listen(3000, () => {
  console.log("server is up on port 3000");
});
