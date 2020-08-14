const express = require("express");
const recipesRouter = require("./recipes/recipesRouter");

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working... it's working!" });
});

server.use("/recipes", recipesRouter);

const port = 8000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
