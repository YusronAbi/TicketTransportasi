const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    passengerName: {
        type: String,
        required: true,
    },
    busNumber: {
        type: String,
        required: true,
    },
    seatNumber: {
        type: String,
        required: true,
    },
    travelDate: {
        type: Date,
        required: true,
    },
}, { timestamps: true });

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;