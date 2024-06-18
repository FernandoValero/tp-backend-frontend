const Ticket = require('../models/ticket');
const ticketCtrl = {}

//Dar de alta un ticket (POST), enviar el espectador como propiedad.
ticketCtrl.createTicket = async (req, res) => {
    var ticket = new Ticket(req.body);
    try {
        await ticket.save()
        res.json({
            'status': '1',
            'msg': 'Ticket guardado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion.'
        })
    }
}

//Recuperar TODOS los ticket (GET) incluyendo la información de los espectadores.
ticketCtrl.getTickets = async (req, res) => {
    var tickets = await Ticket.find().populate("espectador");
    res.json(tickets);
}

//Obtener UN Ticket (GET)
ticketCtrl.getTicketId = async (req, res) => {
    var ticket = await Ticket.findById({ _id: req.params.id }).populate("espectador");
    res.json(ticket);
}

//Eliminar un ticket (DELETE)
ticketCtrl.deleteTicket = async (req, res) => {
    try {
        await Ticket.deleteOne({ _id: req.params.id });
        res.json({
            status: '1',
            msg: 'Ticket eliminado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion'
        })
    }
}

//Modificar un ticket (PUT)
ticketCtrl.editTicket = async (req, res) => {
    const ticket = new Ticket(req.body);
    try {
        await Ticket.updateOne({ _id: req.body._id }, ticket);
        res.json({
            'status': '1',
            'msg': 'Ticket Modificado.'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error procesando la operacion.'
        })
    }
}

//Recuperar SOLO los espectadores que tienen una determinada categoría de espectador (extranjero-local)
ticketCtrl.getTicketsByCategoria = async (req, res) => {
    try {
        const { categoriaEspectador } = req.query;
        const tickets = await Ticket.find({ categoriaEspectador }).populate("espectador");
        res.json(tickets);
    } catch (error) {
        res.status(400).json({
            status: '0',
            msg: 'Error recuperando los tickets.'
        });
    }
};

module.exports = ticketCtrl;