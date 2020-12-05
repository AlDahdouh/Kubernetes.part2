const express = require("express");
fs = require("fs").promises;
const app = express();
const port = process.env.PORT || 3001;
let count = -1;

app.get("/api/pingpong", async (req, res) => {
  res.send(count.toString());
});

app.get("/", async (req, res) => {
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
