const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventoSchema = new Schema({
    id_evento: {type: String},
    titulo: {type: String},
    patrocinador: {type: String},
    fecha_evento: {type: Date},
    hora_inicio_general: {type: Date},
    hora_final_general: {type: Date},
    lugar: {type: String},
    url: {type: String},
    descripcion: {type: String}
});

module.exports = mongoose.model('evento', EventoSchema);