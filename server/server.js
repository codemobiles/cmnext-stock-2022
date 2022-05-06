const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8085;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/uploaded"));
app.use(cors());

app.use("/api/v2/authen/", require("./api_authen"));
app.use("/api/v2/stock/", require("./api_stock"));

app.listen(PORT, () => {
  console.log("Backend is running.. " + PORT);
});
