const express = require("express");
const model = require("../models/todos");
const todosRouter = require("express").Router();

todosRouter.get("/", async (request, response) => {
  result = await model.getTodos();
  console.log(result.task);
  response.status(200).json(result);
});
todosRouter.post("/", async (request, response) => {
  const task = request.body.todo;
  // console.log(task);
  taskid = await model.insertTodos(task);
  response.status(201).json(taskid);
});

module.exports = todosRouter;
