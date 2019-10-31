const mongoose = require('mongoose');
const {Schema} = mongoose;

const UsuarioSchema = new Schema({
    id_usuario: {type: String},
    username : {type: String},
    password: {type: Number},
    fecha_nacimiento: {type: Date},
    correo: {type: String},
    telefono: {type: Number},
    dni: {type: Number}
})

module.exports = mongoose.model('usuario', UsuarioSchema);