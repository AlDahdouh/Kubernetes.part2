const pool = require("../db");

const create_table = async () => {
  try {
    const results = await pool.query("SELECT count(*) FROM todos");
    return results.rows;
    // table exists
  } catch (err) {
    await pool.query(
      "CREATE TABLE public.todos(id SERIAL PRIMARY KEY, todo text)"
    );
    await pool.query(
      `ALTER TABLE public.todos OWNER to ${process.env.POSTGRES_USER}`
    );
  }
};

module.exports = create_table;
