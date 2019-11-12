require('dotenv').config();
console.log("variable entorno");
console.log(process.env.PUBLISHABLE_KEY);
console.log(process.env.SECRET_KEY);

const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;
console.log("-----------------------");

const Ticket= require('../models/ticket');
const stripe = require("stripe")(keySecret);

const PagoCtrl = {};

PagoCtrl.payme = async (req, res)=>{

 console.log("Toda el request",req); 			
 console.log("body del request",req.body);

// `source` is obtained with Stripe.js; see https://stripe.com/docs/payments/cards/collecting/web#create-token
		stripe.charges.create(
  		{
    	amount: 2000,
    	currency: 'usd',
    	source: 'tok_visa',
    	description: 'Charge for jenny.rosen@example.com',
  	},
  	function(err, charge) {
    	// asynchronously called
    	console.log("Exito");
  		}
	);


};

module.exports = PagoCtrl;