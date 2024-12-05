const express = require('express');
const RoutesPublics = require('../routes/publicRoutes');

const router = express.Router();

router.use('/login', RoutesPublics); 
router.use('/usuario', RoutesPublics); 

module.exports = router;