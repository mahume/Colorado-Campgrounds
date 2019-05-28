const router = require('express').Router();
const userRoutes = require('./users');
const geocodeRoutes = require('./geocode');

router.use('/user', userRoutes);
router.use('/geocode', geocodeRoutes);

module.exports = router;
