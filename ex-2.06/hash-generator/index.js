const express = require("express");
const axios = require("axios").default;
fs = require("fs").promises;
const app = express();
const port = process.env.PORT || 3000;
const random_str =
  Math.random().toString(36).substring(2, 15) +
  Math.random().toString(36).substring(2, 15);

app.get("/", async (req, res) => {
  try {
    const data = await fs.readFile("/app/logs", "utf8");
    let out = data.toString();
    const hash = " : " + random_str + "<br>";
    out = out.replace(/ : /g, hash);
    let pong = -1;
    try {
      // pong = await fs.readFile("/ping/pong", "utf8");
      pong = (await axios.get("http://10.43.66.17:2343/api/pingpong")).data;
    } catch (err) {
      console.log(`Error in reading pong api ${err}`);
    }
    out = out + "<br>" + "Ping / Pongs: " + pong;
	const msg = process.env.MESSAGE + "<br>"
	console.log("MESSAGE =", msg);
    res.send(msg+out);
  } catch (err) {
    res.send("Error in reading logs");
  }
});

app.listen(port, () => {
  console.log(`Server started in port  ${port}`);
});
