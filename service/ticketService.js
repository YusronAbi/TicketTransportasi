const Ticket = require('../models/ticket');

class TicketService {
    async createTicket(ticketData) {
        const ticket = new Ticket(ticketData);
        return await ticket.save();
    }

    async getAllTickets() {
        return await Ticket.find();
    }

    async getTicketById(ticketId) {
        return await Ticket.findById(ticketId);
    }

    async updateTicket(ticketId, ticketData) {
        return await Ticket.findByIdAndUpdate(ticketId, ticketData, { new: true, runValidators: true });
    }

    async deleteTicket(ticketId) {
        return await Ticket.findByIdAndDelete(ticketId);
    }
}

module.exports = new TicketService();