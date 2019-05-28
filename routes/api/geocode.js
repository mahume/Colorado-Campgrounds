const router = require('express').Router();
const geocodeController = require('../../controllers/geocodeController');

router.route('/location')
  .get(geocodeController.getLocation)

module.exports = router;