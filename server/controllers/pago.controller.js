require('dotenv').config();
console.log("variable entorno");
console.log(process.env.PUBLISHABLE_KEY);
console.log(process.env.SECRET_KEY);
console.log(process.env.SENDGRID_API_KEY);

const sgMail = require('@sendgrid/mail');

const sgKey = process.env.SENDGRID_API_KEY;
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
console.log("-----------------------");

const Ticket = require('../models/ticket');
const Usuario = require('../models/usuario');
const Evento = require('../models/evento');

const stripe = require("stripe")(keySecret);

const PagoCtrl = {};

async function obtenerEventosRecomendados(usuarios) {

    var eventosRecomendadosId = [];
    var eventosRecomendadosCategoriasRepetidas = [];
    var categoriasRecomendadas = [];
    var eventosAsistidos = [];

    eventosAsistidos = await Evento.find({
        id_evento: { $in: usuarios._eventos }
    }).exec();

    console.log("Eventos a los que asistio pero ids", usuarios._eventos);
    console.log("Eventos a los que asistio", eventosAsistidos);

    if (typeof eventosAsistidos !== 'undefined' && eventosAsistidos.length > 0) {
        console.log("entro aqui");

        eventosAsistidos.forEach(function(elem, pos) {
            console.log("categoria del evento:", elem.categoria);
            eventosRecomendadosCategoriasRepetidas = eventosRecomendadosCategoriasRepetidas.concat(elem.categoria);
        });
        console.log("categoriasRecomendadasRepetidas", eventosRecomendadosCategoriasRepetidas);

        //categoriasRecomendadas = eventosRecomendadosCategoriasRepetidas.filter( function(elem, pos){
        //  return eventosRecomendadosCategoriasRepetidas.indexOf(elem) == pos;
        //});
        var set_element = new Set(eventosRecomendadosCategoriasRepetidas);
        categoriasRecomendadas = [...set_element];

        eventosRecomendadosId = await Evento.find({
            categoria: { $in: categoriasRecomendadas }
        });

    }
    console.log("categoriasRecomendadas: ", categoriasRecomendadas);
    console.log("EVENTOS RECOMENDADOS ID: ", eventosRecomendadosId);
    return eventosRecomendadosId;
}

PagoCtrl.payme = async(req, res) => {

    console.log("Toda el request", req);
    console.log("body del request", req.body);

    // `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/cards/collecting/web#create-token
    stripe.charges.create({
            amount: 2000,
            currency: 'usd',
            source: 'tok_visa',
            description: 'Pago realizado por la compra de tickets',
        },
        function(err, charge) {
            // asynchronously called
            console.log("Exito");
        }
    );



    sgMail.setApiKey(sgKey);


    try {

        console.log("email es: ", req.body.card.name);
        var usuarioCompro = await Usuario.findOne({ correo: req.body.card.name });
        var eventos_id = await obtenerEventosRecomendados(usuarioCompro);
        console.log("LE RECOMENDAMOS LOS SIGUIENTES SHOWS", eventos_id);

        const msg = {
            to: req.body.card.name,
            from: 'TuEntry@example.com',
            subject: 'Aviso de compra',
            text: 'Su compra fue exitosa',
            html: '<strong>Usted ha comprado tickets para el evento...!</strong>' + "<br>" + "<h2>" + `${eventos_id[0].titulo}` + "</h2>" + "<br>" + '<img src="'+ `${eventos_id[0].url}` + '" alt="Smiley face" height="90" width="160">' + "<br>" + "<p>"  + `${eventos_id[0].descripcion}` +"</p>" + "<h3> Tal vez le interesen los siguientes eventos </h3>" +"<h2>" + `${eventos_id[1].titulo}` + "</h2>" + "<br>" + '<img src="'+ `${eventos_id[1].url}` + '" alt="Smiley face" height="90" width="160">' + "<br>" + "<p>"  + `${eventos_id[1].descripcion}` +"</p>"   

        };

    await sgMail.send(msg);
    console.log("se envio el msg");
    } catch (err) {

        console.log("Ocurrio un error! Y No se envio el email");
        console.log(err);
    }

};



module.exports = PagoCtrl;