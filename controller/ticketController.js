const Ticket = require('../models/ticket');
const { successResponse, errorResponse } = require('../utils/response');

exports.createTicket = async (req, res) => {
    try { //lupa
        const ticket = new Ticket(req.body);
        await ticket.save();
        successResponse(res, 201, ticket);
    } catch (error) {
        errorResponse(res, 400, error.message);
    }
};

exports.getAllTickets = async (req, res) => {
    try {
        const tickets = await Ticket.find();
        successResponse(res, 200, tickets);
    } catch (error) {
        errorResponse(res, 500, error.message);
    }
};

exports.getTicketById = async (req, res) => {
    try {
        const ticket = await Ticket.findById(req.params.id);
        if (!ticket) {
            return errorResponse(res, 404, 'Ticket not found');
        }
        successResponse(res, 200, ticket);
    } catch (error) {
        errorResponse(res, 500, error.message);
    }
};

exports.updateTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!ticket) {
            return errorResponse(res, 404, 'Ticket not found');
        }
        successResponse(res, 200, ticket);
    } catch (error) {
        errorResponse(res, 400, error.message);
    }
};

exports.deleteTicket = async (req, res) => {
    try {
        const ticket = await Ticket.findByIdAndDelete(req.params.id);
        if (!ticket) {
            return errorResponse(res, 404, 'Ticket not found');
        }
        successResponse(res, 204, null);
    } catch (error) {
        errorResponse(res, 500, error.message);
    }
};