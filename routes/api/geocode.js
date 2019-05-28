const router = require('express').Router();
const geocodeController = require('../../controllers/geocodeController');

router.route('/geocode')
  .get(geocodeController.getLocation)

module.exports = router;