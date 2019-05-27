require('dotenv').config();
const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/${
    process.env.DARKSKY_API_KEY
  }/${latitude},${longitude}`;

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback('Unable to connect to weather service.', undefined);
      } else if (body.error) {
        callback('Unable to find location.', undefined);
      } else {
        const degrees = body.currently.temperature;
        const precipitation = body.currently.precipProbability;
        callback(
          undefined,
          `${
            body.daily.data[0].summary
          } It is currently ${degrees} degrees out. The high today is ${
            body.daily.data[0].temperatureHigh
          }. There is a ${precipitation}% change of rain.`
        );
      }
    }
  );
};

module.exports = forecast;