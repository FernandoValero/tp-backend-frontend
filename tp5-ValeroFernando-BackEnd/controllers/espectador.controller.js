const Espectador = require('../models/espectador');
const espectadorCtrl = {}

//Dar de alta un Espectador (POST)
espectadorCtrl.createEspectador = async (req, res) => {
    var espectador = new Espectador(req.body);
    try {
        await espectador.save();
        res.json({
            'status': '1',
            'msg': 'Espectador registrado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion.'
        })
    }
}

//Recuperar TODOS los Espectadores (GET)
espectadorCtrl.getEspectadores = async (req, res) => {
    var espectadores = await Espectador.find();
    res.json(espectadores);
}

//Obtener UN Espectador (GET)
espectadorCtrl.getEspectadorId = async (req, res) => {
    try {
        const { _id } = req.query;
        const espectador = await Espectador.find({ _id });
        res.json(espectador);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error al recuperar el Espectador.'
        });
    }
}

module.exports = espectadorCtrl;