const {
  getAllFlights,
  addNewFlight,
  getFlightById,
} = require("../../model/flight.model");

const httpGetAllFlights = (req, res) => {
  res.status(200).json(getAllFlights());
};

const httpAddNewFlight = (req, res) => {
  const flight = req.body;

  addNewFlight(flight);
  res.status(201).json(flight);
};

const httpGetFlightById = (req, res) => {
  const flightId = Number(req.params.id);

  res.status(200).json(getFlightById(flightId));
};

module.exports = { httpGetAllFlights, httpAddNewFlight, httpGetFlightById };
