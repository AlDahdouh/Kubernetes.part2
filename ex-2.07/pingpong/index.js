const express = require("express");
const pool = require("./db");
fs = require("fs").promises;
const app = express();
const port = process.env.PORT || 3001;
let count = -1;

app.get("/api/pingpong", async (req, res) => {
  // console.log("getCounter() = ", await getCounter());
  res.status(200).json(await getCounter());
});

app.get("/", async (req, res) => {
  count = await getCounter();
  await pool.query("UPDATE counter set val = $1", [count + 1]);
  count += 1;
  try {
    await fs.writeFile("/ping/pong", count);
  } catch (err) {
    console.log(`Error in writing to pong file :: \n ${err}`);
  }

  res.send(`pong ${count}`);
});

app.listen(port, () => {
  console.log(`Server started in port  ${port}`);
});

const getCounter = async () => {
  try {
    current_value = await pool.query("SELECT val FROM counter");
    result = 1;
    if (current_value.rowCount == 0) {
      // no previous record exists
      await pool.query("INSERT INTO counter (val) VALUES ($1)", [1]);
      return 1;
    } else {
      result = parseInt(current_value.rows[0].val);
      return result;
    }
  } catch (err) {
    await pool.query(
      "CREATE TABLE public.counter(val numeric NOT NULL,CONSTRAINT counter_pkey PRIMARY KEY (val))"
    );
    await pool.query(
      `ALTER TABLE public.counter OWNER to ${process.env.POSTGRES_USER}`
    );
    await pool.query("INSERT INTO counter (val) VALUES ($1)", [1]);
    return 1;
  }
};
