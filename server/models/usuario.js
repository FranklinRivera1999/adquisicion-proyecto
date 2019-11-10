const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');

const UsuarioSchema = new Schema({
    id_usuario: {type: String},
    username : {type: String},
    password: {type: String},
    fecha_nacimiento: {type: Date},
    correo: {type: String},
    telefono: {type: Number},
    dni: {type: Number}
});

  UsuarioSchema.methods.comparePassword = function(pass){
    return bcrypt.compareSync(pass,this.password);
  };
  UsuarioSchema.methods.encriptPassword = function(pass){
    return bcrypt.hashSync(pass,10);
  };


module.exports = mongoose.model('usuario', UsuarioSchema);