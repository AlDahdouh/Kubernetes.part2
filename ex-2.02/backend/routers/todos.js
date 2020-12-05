const todosRouter = require("express").Router();
let todoList = [];
todosRouter.get("/", async (request, response) => {
  response.json(todoList);
});
todosRouter.post("/", (request, response) => {
  const todo = request.body;
  const maxid =
    todoList.length > 0 ? Math.max(...todoList.map((n) => n.id)) : 0;
  todo.id = maxid + 1;
  console.log("Adding new todo: ", todo);
  todoList = todoList.concat(todo);
  response.json(todo);
});

module.exports = todosRouter;
