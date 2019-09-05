const express = require("express");
const RecipesRouter = require("./recipes/recipes-router");
const server = express();
server.use(express.json());
server.use("/api/recipes", RecipesRouter);

server.get("/", (req, res) => {
  res.send("Welcome to / ~ server.js working!");
});

module.exports = server;
