const express = require('express');
const {
    createTicket,
    getAllTickets,
    getTicketById,
    updateTicket,
    deleteTicket,
} = require('../controllers/ticketController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/',auth, createTicket);
router.get('/', getAllTickets);
router.get('/:id', getTicketById);
router.put('/:id', auth, updateTicket);
router.delete('/:id',auth, deleteTicket);

module.exports = router;