const pool = require("./db");
const axios = require("axios");

const insertTodos = async () => {
  try {
    const res = await axios.head(
      "https://en.wikipedia.org/wiki/Special:Random"
    );

    const task = "Read " + res.request.res.responseUrl;
    result = await pool.query(
      "INSERT INTO todos (todo) VALUES ($1) returning id",
      [task]
    );
    // console.log(result);
    console.log(`The task ${task} was added with id = ${result.rows[0].id}`);
    return { id: result.rows[0].id, todo: task };

    // result = await pool.query("Select * from todos");
    // console.log(result);
    // return;
  } catch (err) {
    console.log("INSERTION ERROR", err);
  }
};

insertTodos();
