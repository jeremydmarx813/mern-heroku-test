const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT;
const mode = process.env.MODE;

if (mode === "development") {
  morgan("dev");
} 
if(mode === "production") {
  console.log('production test');
  app.use(express.static(path.resolve(__dirname, "./client/build")));
  app.get("*", (req, res) => {
    console.log('req: ', req)
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`app listening on port ${port} in ${mode} mode`);
});
