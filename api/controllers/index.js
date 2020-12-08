const express = require('express');
const router = express.Router();

// Load each controller
const authController = require('./auth');
const itemsController = require('./items.js');
const cartItemsController = require('./cartItems.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/auth', authController);
router.use('/items', itemsController);
router.use('/cartItems', cartItemsController);
router.use('/application-configuration', appConfigController);

module.exports = router;
