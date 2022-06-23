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

const existsFlightId = (flightId) => {
  return flights.has(flightId);
};

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

const updateFlightById = (flightId, title, time, price, date) => {
  if (title) {
    flights.get(flightId).title = title;
  } else if (time) {
    flights.get(flightId).time = time;
  } else if (price) {
    flights.get(flightId).price = price;
  } else if (date) {
    flights.get(flightId).date = date;
  } else {
    return { message: `Please input a valid detail` };
  }

  return flights.get(flightId);
};

module.exports = {
  getAllFlights,
  addNewFlight,
  getFlightById,
  deleteFlightById,
  existsFlightId,
  updateFlightById,
};
