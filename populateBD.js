//cursor = db.veterinaria.find()
db = connect("mongodb://localhost:27017/adqui")
//let evento= db.collection('eventos');
db.createCollection('eventos');

//let ticket= db.collection('tickets');
db.createCollection('tickets');

//let usuario= db.collection('usuarios');
db.createCollection('usuarios');


let usuarios = [
{id_usuario: "1234", username: "ACM", password: "151454", fecha_nacimiento: new ISODate("2000-03-17"), correo:"abc@gmail.com",telefono:5141151,dni:44444455},
{id_usuario: "1235", username: "ABM", password: "145454", fecha_nacimiento: new ISODate("2010-03-17"), correo:"deg@gmail.com",telefono:1201151,dni:45444455}
];

let eventos = [
	{ id_evento: "ACM1PT", patrocinador:"SAGABELLA", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" }
]

db.usuarios.insertMany(usuarios);
db.eventos.insertMany(eventos);


let tickets = [ 
{ id_ticket: "ACMQ1120", precio: 50, codigo: "asd1", puerta: "2", fila: "4", asiento: "21", evento: db.eventos.findOne()},
{ id_ticket: "ACMQ1121", precio: 70, codigo: "asd2", puerta: "3", fila: "2", asiento: "11", evento: db.eventos.findOne()},
{ id_ticket: "ACMQ1122", precio: 40, codigo: "asd3", puerta: "4", fila: "3", asiento: "31", evento: db.eventos.findOne()},
{ id_ticket: "ACMQ1123", precio: 30, codigo: "asd4", puerta: "5", fila: "1", asiento: "41", evento: db.eventos.findOne()},
{ id_ticket: "ACMQ1124", precio: 20, codigo: "asd5", puerta: "6", fila: "4", asiento: "51", evento: db.eventos.findOne()},
{ id_ticket: "ACMQ1125", precio: 10, codigo: "asd6", puerta: "7", fila: "5", asiento: "61", evento: db.eventos.findOne()}
]


db.tickets.insertMany(tickets);


//while ( cursor.hasNext() ) {
//   printjsononeline( cursor.next() )
//}
