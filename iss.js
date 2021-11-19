const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(callback) {
  const url = 'https://api.ipify.org?format=json';

  request(url, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    callback(null, JSON.stringify(data.ip));
  });
};


const fetchCoordsByIP = function(ip, callback) {
  const apiKey = 'de404f90-48f2-11ec-814a-d1972a1b6d1d';
  const url = `https://api.freegeoip.app/json/?apikey=${apiKey}`;
  
  request(url, (error, response, body) => {
    if (error) return callback(error);

    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordinates of IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }

    const data = JSON.parse(body);
    const coordinates = { latitude: data.latitude, longitude: data.longitude};
    callback(null, coordinates);
  });
};

module.exports = { fetchMyIP, fetchCoordsByIP };