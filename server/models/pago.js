const mongoose = require('mongoose');
const {Schema} = mongoose;

const PagoSchema = new Schema({
    id_ticket: [{type: String}],
    id_usuario: [{type: String}],
    MontoTotal: {type: Number}
});


module.exports = mongoose.model('pago', TicketSchema);