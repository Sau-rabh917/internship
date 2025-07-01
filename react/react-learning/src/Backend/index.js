// import http from "http";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!\n");
// }); 

// server.listen(3000, () => {
//   console.log("Server is running on http://localhost:3000");
// });

import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({name:"john",age:30,city:"New York"});
  res.send("Hello, World!");
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
