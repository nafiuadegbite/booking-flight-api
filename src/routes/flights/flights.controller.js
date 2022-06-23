const {
  getAllFlights,
  addNewFlight,
  getFlightById,
  deleteFlightById,
  existsFlightId,
  updateFlightById,
} = require("../../model/flight.model");

const httpGetAllFlights = (req, res) => {
  return res.status(200).json(getAllFlights());
};

const httpAddNewFlight = (req, res) => {
  const flight = req.body;
  if (!flight.title || !flight.time || !flight.price || !flight.date) {
    return res.status(400).json({
      error: "Missing required flight property",
    });
  }

  addNewFlight(flight);
  return res.status(201).json(flight);
};

const httpGetFlightById = (req, res) => {
  const flightId = Number(req.params.id);
  if (!existsFlightId(flightId)) {
    return res.status(404).json({
      error: "Flight details not found",
    });
  }

  return res.status(200).json(getFlightById(flightId));
};

const httpDeleteFlightById = (req, res) => {
  const flightId = Number(req.params.id);

  if (!existsFlightId(flightId)) {
    return res.status(404).json({
      error: "Flight not found",
    });
  }

  deleteFlightById(flightId);
  return res.status(200).json({
    message: "Flight deleted successfully",
  });
};

const httpUpdateFlightById = (req, res) => {
  const flightId = Number(req.params.id);

  if (!existsFlightId(flightId)) {
    return res.status(404).json({
      error: "Flight details not found",
    });
  }

  const flight = req.body;

  const updatedDetails = updateFlightById(
    flightId,
    flight.title,
    flight.time,
    flight.price,
    flight.date
  );
  return res.status(200).json(updatedDetails);
};

module.exports = {
  httpGetAllFlights,
  httpAddNewFlight,
  httpGetFlightById,
  httpDeleteFlightById,
  httpUpdateFlightById,
};
