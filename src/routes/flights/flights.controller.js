const {
  getAllFlights,
  addNewFlight,
  getFlightById,
  deleteFlightById,
} = require("../../model/flight.model");

const httpGetAllFlights = (req, res) => {
  res.status(200).json(getAllFlights());
};

const httpAddNewFlight = (req, res) => {
  const flight = req.body;
  if (!flight.title || !flight.time || !flight.price || !flight.date) {
    return res.status(400).json({
      error: "Missing required flight property",
    });
  }

  addNewFlight(flight);
  res.status(201).json(flight);
};

const httpGetFlightById = (req, res) => {
  const flightId = Number(req.params.id);

  res.status(200).json(getFlightById(flightId));
};

const httpDeleteFlightById = (req, res) => {
  const flightId = Number(req.params.id);

  res.status(200).json(deleteFlightById(flightId));
};

module.exports = {
  httpGetAllFlights,
  httpAddNewFlight,
  httpGetFlightById,
  httpDeleteFlightById,
};
