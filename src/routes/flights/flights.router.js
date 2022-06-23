const express = require("express");
const {
  httpGetAllFlights,
  httpAddNewFlight,
  httpGetFlightById,
  httpDeleteFlightById,
  httpUpdateFlightById,
} = require("./flights.controller");

const flightsRouter = express.Router();

flightsRouter.get("/", httpGetAllFlights);
flightsRouter.get("/:id", httpGetFlightById);
flightsRouter.post("/", httpAddNewFlight);
flightsRouter.delete("/:id", httpDeleteFlightById);
flightsRouter.patch("/:id", httpUpdateFlightById);

module.exports = { flightsRouter };
