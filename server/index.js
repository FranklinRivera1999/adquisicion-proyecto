const express = require ('express');
//const stripe = require("stripe")(keySecret);
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const {mongoose}= require('./database');
//Settings
app.set('port', 5000);
//Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api/usuario',require('./routes/usuario.route'));
app.use('/api/evento',require('./routes/evento.route'));
app.use('/api/ticket',require('./routes/ticket.route'));
app.use('/login',require('./routes/auth.route'));
app.use('/payme',require('./routes/pago.route'));

//Starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});