const connectToMongo = require("./db");

connectToMongo();
const cors = require("cors");
const express = require("express");
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
//available routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => {
  res.send("Hello World Ishaaa!");
});

app.listen(port, () => {
  console.log(`YourBook listening on port http://localhost:${port}`);
});
