const flights = new Map();

let latestFlightId = 1;

const flight = {
  flightId: latestFlightId,
  time: "1pm",
  price: 26000,
  date: new Date("June 26, 2022"),
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
  const flightById = flights.get(flightId);

  return flightById;
};

module.exports = { getAllFlights, addNewFlight, getFlightById };
