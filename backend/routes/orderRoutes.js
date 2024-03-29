// routes/orderRoutes.js
const express = require('express');
const router = express.Router();

const OrderController = require('../controllers/orderController');

router.post('/', OrderController.placeOrder);

module.exports = router;