const router = require('express').Router();
const userRoutes = require('./users');
const geocodeRoutes = require('./geocode');

router.use('/users', userRoutes);
router.use('/geocode', geocodeRoutes);

module.exports = router;
