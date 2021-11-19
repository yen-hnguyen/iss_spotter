const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');
// const { fetchCoordsByIP } = require('./iss');
// const { fetchISSFlyOverTimes } = require(./iss)
 

fetchMyIP((error, ip) => {
  if (error) return console.log("It didn't work!", error);

  console.log("It worked! Returned IP: ", ip);
});

fetchCoordsByIP("149.248.186.71", (error, data) => {
  if (error) return console.log("It didn't work!", error);

  console.log("It worked! Returned IP: ", data);
});

fetchISSFlyOverTimes("149.248.186.71", (error, data) => {
  if (error) return console.log("It didn't work!", error);

  console.log(data);
});