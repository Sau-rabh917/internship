import express from "express";

import db from "./database.js";

import {configDotenv} from "dotenv";

configDotenv();
db();
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
}); 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
