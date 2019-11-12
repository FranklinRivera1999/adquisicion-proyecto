const mongoose = require('mongoose');
const {Schema} = mongoose;
const bcrypt = require('bcryptjs');
const Evento = require('../models/evento');

const UsuarioSchema = new Schema({
    id_usuario: {type: String},
    username : {type: String},
    password: {type: String},
    fecha_nacimiento: {type: Date},
    correo: {type: String},
    telefono: {type: Number},
    dni: {type: Number},
    _eventos: [{type: String}]
});






  UsuarioSchema.methods.comparePassword = function(pass){
    return bcrypt.compareSync(pass,this.password);
  };
  UsuarioSchema.methods.encriptPassword = function(pass){
    return bcrypt.hashSync(pass,10);
  };

  /*UsuarioSchema.methods.obtenerEventosRecomendados = function(){
    var eventosRecomendadosId = [];
    var eventosRecomendadosCategoriasRepetidas = [];
    var categoriasRecomendadas = [];
    var eventosAsistidos = [];

    Evento.find({
      id_evento: { $in: this._eventos}
    }).exec( function doThings(err,doc){
        eventosAsistidos = doc;
    });
    
    eventosAsistidos = mongoose.model("evento").find({
      id_evento: { $in: this._eventos}
    });

    console.log("Eventos a los que asistio pero ids",this._eventos);
    console.log("Eventos a los que asistio",eventosAsistidos);

    if (eventosAsistidos){
      eventosAsistidos.filter( function (elem,pos){
        return eventosRecomendadosCategoriasRepetidas.concat(elem.categorias);
      });

      categoriasRecomendadas = eventosRecomendadosCategoriasRepetidas.filter( function(elem, pos){
        return eventosRecomendadosCategoriasRepetidas.indexOf(elem) == pos;
      });

      eventosRecomendadosId = Evento.find({
        categoria: { $in: categoriasRecomendadas}
      });

    }

    console.log("EVENTOS RECOMENDADOS ID: ",eventosRecomendadosId);
    return eventosRecomendadosId;
  };
  */


    const Usuario = module.exports = mongoose.model('usuario', UsuarioSchema);