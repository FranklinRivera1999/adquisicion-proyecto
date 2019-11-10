const Usuario = require('../models/usuario');

const UsuarioCtrl = {};


UsuarioCtrl.getUsuarios = async (req, res)=>{
    const usuarios = await Usuario.find();
    console.log(usuarios);
    res.json(usuarios);
};


module.exports = UsuarioCtrl;