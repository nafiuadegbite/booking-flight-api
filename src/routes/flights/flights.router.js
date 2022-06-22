const express = require("express");
const {
  httpGetAllFlights,
  httpAddNewFlight,
  httpGetFlightById,
} = require("./flights.controller");

const flightsRouter = express.Router();

flightsRouter.get("/", httpGetAllFlights);
flightsRouter.get("/:id", httpGetFlightById);
flightsRouter.post("/", httpAddNewFlight);

module.exports = { flightsRouter };
