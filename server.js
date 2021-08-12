const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const path = require("path");
const port = process.env.PORT;
const mode = process.env.MODE;

if (mode === "development") {
  morgan("dev");
} else {
  app.use(express.static(path.resolve(__dirname, "./client/build")));
  app.get("*", (request, response) => {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`app listening on port ${port} in ${mode} mode`);
});
