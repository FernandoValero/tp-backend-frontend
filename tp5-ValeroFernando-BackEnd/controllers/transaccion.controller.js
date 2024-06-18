const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

//Dar de alta una Transaccion (POST)
transaccionCtrl.createTransaccion = async (req, res) => {
    var nuevaTransaccion = new Transaccion(req.body);
    try {
        await nuevaTransaccion.save();
        res.json({
            'status': '1',
            'msg': 'Transacción creada.'
        });
    } catch (error) {
        res.status(400).json({
            error,
            'status': '0',
            'msg': 'Error procesando la operación.'
        })
    }
}

//Recuperar TODAS las Transacciones Registradas (GET)
transaccionCtrl.getTransacciones = async (req, res) => {
        var transacciones = await Transaccion.find();
        res.json(transacciones);
}

//Recuperar el histórico de transacciones de un determinado cliente (GET), utilizar email como clave
transaccionCtrl.getTransaccionesByEmail = async (req, res) => {
    try {
        const { emailCliente } = req.query;
        const transacciones = await Transaccion.find({ emailCliente });
        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error recuperando las transacciones.'
        });
    }
};

//Recuperar TODAS las Transacciones que tengan como origen y destino las divisas(monedas) recibidas como parámetro(GET).Utilice el concepto de PARAMS.
transaccionCtrl.getTransaccionesByMoneda = async (req, res) => {
      try {
        const { monedaOrigen, monedaDestino } = req.query;
        const transacciones = await Transaccion.find({ monedaOrigen, monedaDestino });
        res.json(transacciones);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error recuperando las transacciones.'
        });
    }
};

module.exports = transaccionCtrl;
