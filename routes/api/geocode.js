const router = require('express').Router();
const geocodeController = require('../../controllers/geocodeController');

router.route('/weather')
  .get(geocodeController.getWeather)

module.exports = router;