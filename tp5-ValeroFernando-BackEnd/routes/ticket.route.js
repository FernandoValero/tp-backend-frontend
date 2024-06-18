const express = require('express');
const router = express.Router();
const ticketCtrl = require('./../controllers/ticket.controller');

// Ruta para crear un ticket
router.post('/', ticketCtrl.createTicket);

// Ruta para obtener todos los tickets
router.get('/', ticketCtrl.getTickets);

// Ruta para obtener tickets por categoría de espectador
router.get('/categoria', ticketCtrl.getTicketsByCategoria);

// Ruta para obtener un ticket por ID
router.get('/:id', ticketCtrl.getTicketId);

// Ruta para eliminar un ticket por ID
router.delete('/:id', ticketCtrl.deleteTicket);

// Ruta para editar un ticket por ID
router.put('/:id', ticketCtrl.editTicket);

module.exports = router;