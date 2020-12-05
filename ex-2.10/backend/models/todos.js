const pool = require("../db");
const create_table = require("./create_table");

create_table();

const getTodos = async () => {
  const results = await pool.query("SELECT * FROM todos");
  // console.log(results.rows);
  return results.rows;
};

const insertTodos = async (task) => {
  try {
    if (task.length > 140) {
      throw `The length of {${task}} is ${task.length} char. \nIt should be <= 140 char.`;
    }
    result = await pool.query(
      "INSERT INTO todos (todo) VALUES ($1) returning id",
      [task]
    );
    // console.log(result);
    console.log(`New task added :${result.rows[0].id}`);
    return { id: result.rows[0].id, todo: task };
  } catch (err) {
    console.log("INSERT ERROR", err);
  }
};

module.exports = { getTodos, insertTodos };
