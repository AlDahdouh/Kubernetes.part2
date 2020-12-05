const express = require("express");
const app = express();
require("express-async-errors");
const cors = require("cors");
const imageRouter = require("./routers/images");
const todosRouter = require("./routers/todos");

// app.use(express.static("./build"));
app.use(cors());
app.use(express.json());

app.use("/api/images", imageRouter);
app.use("/api/todos", todosRouter);
module.exports = app;
