const express = require("express");
const {
  httpGetAllFlights,
  httpAddNewFlight,
  httpGetFlightById,
  httpDeleteFlightById,
} = require("./flights.controller");

const flightsRouter = express.Router();

flightsRouter.get("/", httpGetAllFlights);
flightsRouter.get("/:id", httpGetFlightById);
flightsRouter.post("/", httpAddNewFlight);
flightsRouter.delete("/:id", httpDeleteFlightById);

module.exports = { flightsRouter };
