const Ticket= require('../models/ticket');

const TicketCtrl = {};

TicketCtrl.getTickets = async (req, res)=>{
    const tickets = await Ticket.find();
    console.log(tickets);
    res.json(tickets);
};

module.exports = TicketCtrl;