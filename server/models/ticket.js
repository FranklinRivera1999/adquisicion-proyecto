const mongoose = require('mongoose');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    id_ticket: {type: String},
    precio: {type: Number},
    puerta: {type: String},
    fila: {type: String},
    asiento: {type: String},
    estado: {type: String},
    _evento: {type: String},
    _usuario: {type: String}
});


module.exports = mongoose.model('ticket', TicketSchema);