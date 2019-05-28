const geocode = require('../client/utils/geocode');

module.exports = {
  getLocation(req, res) {
    if (!req.query.address) {
      return res.send({
        error: 'You must provide an address',
      });
    }
    geocode(
      req.query.address,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          return res.send({ error });
        }
        forecast(latitude, longitude, (error, forecastData) => {
          if (error) {
            res.send({ error });
          }
          res.send({
            forecast: forecastData,
            location,
            address: req.query.address,
          });
        });
      }
    );
  }
}