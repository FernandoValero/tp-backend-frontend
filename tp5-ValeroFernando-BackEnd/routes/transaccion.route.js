const transaccionCtrl = require('./../controllers/transaccion.controller');

const express = require('express');
const router = express.Router();

router.post('/', transaccionCtrl.createTransaccion);
router.get('/', transaccionCtrl.getTransacciones);
router.get('/email', transaccionCtrl.getTransaccionesByEmail);
router.get('/monedas', transaccionCtrl.getTransaccionesByMoneda);

module.exports = router;
