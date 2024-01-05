const express = require("express");
const dotenv = require("dotenv");
const parser = require("body-parser");
dotenv.config();
const app = express();

// Body Parser config
app.use(parser.urlencoded({ extended: false, limit: "500mb" }));
app.use(parser.json());

// Server Health Check
app.get("/", (req, res) => {
  res.send("Package Delivery Express Server REST API is running");
});

// Server Root Endpoints

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  // Connect Database
  console.log(`Server is running on port http://localhost:${PORT}`);
});
