const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventoSchema = new Schema({
    id_evento: {type: String},
    patrocinador: {type: String},
    fechaEvento: {type: Date},
    hora_inicio_general: {type: Date},
    hora_final_general: {type: Date},
    lugar: {type: String},
    numero_ticket: {type: Number}
})

module.exports = mongoose.model('evento', EventoSchema);