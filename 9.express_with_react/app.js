import express from "express";
// import fs from "fs";

const app = express();
const PORT = "7000";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>welcome</h1>");
});

app.listen(PORT, () => {
  console.log("server is up on port" + PORT);
});
