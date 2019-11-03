const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventoSchema = new Schema({
    id_evento: {type: String},
    patrocinador: {type: String},
    fecha_evento: {type: Date},
    hora_inicio_general: {type: Date},
    hora_final_general: {type: Date},
    lugar: {type: String},
    _ticket: [{
    	type: Schema.Types.ObjectId,
    	ref: "Ticket"
    }]
});

module.exports = mongoose.model('evento', EventoSchema);