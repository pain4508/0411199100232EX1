var express = require('express');
var router = express.Router();

var recetaRoutes = require('./receta');
router.use('/receta', recetaRoutes);

module.exports = router;