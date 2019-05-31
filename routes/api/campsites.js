const router = require('express').Router();
const campsitesController = require('../../controllers/campsitesController');

router.route('/')
  .get(campsitesController.findOne)