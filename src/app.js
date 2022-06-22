const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { flightsRouter } = require("./routes/flights/flights.router");

const app = express();

app.use(morgan("combined"));
app.use(express.json());


app.use("/flights", flightsRouter);

module.exports = app;
