const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var cors = require("cors");
const smtp = require("./routes/smtp");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", smtp);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
