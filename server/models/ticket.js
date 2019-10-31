const mongoose = require('mongoose');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    id_ticket: {type: String},
    precio: {type: Number},
    codigo: {type: String},
    puerta: {type: String},
    fila: {type: String},
    asiento: {type: String}
})

module.exports = mongoose.model('ticket', TicketSchema);