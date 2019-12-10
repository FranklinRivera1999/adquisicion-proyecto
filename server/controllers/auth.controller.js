const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const session = {};

session.crearSession = async (req, res)=>{
	console.log(req.params);
	console.log(req.body);
	console.log('jhvjh');

    const usuario = await Usuario.findOne({"username": req.body.username});
    try{

    	console.log(usuario);

	    if (!usuario){
	    	console.log("Usuario o contraseña incorrecto");
	    	res.send("No se encontro usuario");
	    }
	    else if (bcrypt.compareSync(req.body.password, usuario.password)){
	    	req.session.user = usuario;
	    	res.send(usuario);
	    }
	    else{
	    	console.log("password incorrecto");
	    	res.send("password incorrecto");
	    }
	}
	catch(err){
		console.log(err);
	}

};

module.exports = session;