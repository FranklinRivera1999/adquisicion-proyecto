const mongoose = require('mongoose');
const {Schema} = mongoose;

const TicketSchema = new Schema({
    id_ticket: {type: String},
    precio: {type: Number},
    codigo: {type: String},
    puerta: {type: String},
    fila: {type: String},
    asiento: {type: String},
    _evento: {
   		type: Schema.Types.ObjectId,
    	ref: "Ticket"
    },
    _usuario: {
    	type: Schema.Types.ObjectId,
    	ref: "Usuario"
    }
})

module.exports = mongoose.model('ticket', TicketSchema);