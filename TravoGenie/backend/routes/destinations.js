const express = require('express');
const router = express.Router();
const destinationsController = require('../controllers/destinationsController');

// GET /api/destinations - list all destinations
router.get('/', destinationsController.getAllDestinations);

// GET /api/destinations/:id - get destination by id
router.get('/:id', destinationsController.getDestinationById);

module.exports = router;
