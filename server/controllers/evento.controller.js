const Evento = require('../models/evento');

const EventoCtrl = {};

EventoCtrl.getEventos = async (req, res)=>{
    const eventos = await Evento.find();
    console.log(eventos);
    res.json(eventos);
};
EventoCtrl.getEvento = async (req, res)=>{
	const id= req.params.id;
	console.log(id);
	const evento = await Evento.findOne( {_id : id});
	console.log(evento);
	res.json(evento);
};

EventoCtrl.getEventosR =  async (req, res)=>{
	console.log("-------------------------111---------------------------------------------------");
    const eventosR =  await req.session.user._eventos;
    console.log("AQUI LLEGAN LOS RECOMENDADOS");
    console.log(eventosR);
    console.log("AQUI SALEN");
    res.json(eventosR);
};

module.exports = EventoCtrl;