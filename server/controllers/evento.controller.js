const Evento = require('../models/evento');

const EventoCtrl = {};

EventoCtrl.getEventos = async (req, res)=>{
    const eventos = await Evento.find();
    console.log(eventos);
    res.json(eventos);
};

module.exports = EventoCtrl;