const flights = new Map();

let latestFlightId = 1;

const flight = {
  flightId: latestFlightId,
  title: "flight to canada",
  time: "1pm",
  price: 26000,
  date: "26-06-2022",
};

flights.set(flight.flightId, flight);

const getAllFlights = () => {
  return Array.from(flights.values());
};

const addNewFlight = (flight) => {
  latestFlightId++;
  flights.set(
    latestFlightId,
    Object.assign(flight, { flightId: latestFlightId })
  );
};

const getFlightById = (flightId) => {
  const requestedFlight = flights.get(flightId);

  return requestedFlight;
};

const deleteFlightById = (flightId) => {
  const deletedFlight = flights.delete(flightId);

  return deletedFlight;
};

module.exports = {
  getAllFlights,
  addNewFlight,
  getFlightById,
  deleteFlightById,
};
