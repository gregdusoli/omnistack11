const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const { requestLogger } = require("./helpers");

const app = express();

app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV !== "test") {
  app.use(requestLogger);
}
app.use(routes);
app.use(errors());

module.exports = app;
