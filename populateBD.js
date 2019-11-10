//cursor = db.veterinaria.find()

db = connect("mongodb://localhost:27017/adqui");
//let evento= db.collection('eventos');
db.createCollection('eventos');

//let ticket= db.collection('tickets');
db.createCollection('tickets');

//let usuario= db.collection('usuarios');
db.createCollection('usuarios');


let usuarios = [
{id_usuario: "00001", username: "ACM1", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2000-03-17"), correo:"abc1@gmail.com",telefono:51411511,dni:444444551},
{id_usuario: "00002", username: "ABM2", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2010-03-17"), correo:"deg2@gmail.com",telefono:12011512,dni:454444552},
{id_usuario: "00003", username: "ACM3", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2000-03-17"), correo:"abc3@gmail.com",telefono:51411513,dni:444444553},
{id_usuario: "00004", username: "ABM4", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2010-03-17"), correo:"deg4@gmail.com",telefono:12011514,dni:454444554},
{id_usuario: "00005", username: "ACM5", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2000-03-17"), correo:"abc5@gmail.com",telefono:51411515,dni:444444555},
{id_usuario: "00006", username: "ABM6", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2010-03-17"), correo:"deg6@gmail.com",telefono:12011516,dni:454444556},
{id_usuario: "00007", username: "ACM7", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2000-03-17"), correo:"abc7@gmail.com",telefono:51411517,dni:444444557},
{id_usuario: "00008", username: "ABM8", password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna", fecha_nacimiento: new ISODate("2010-03-17"), correo:"deg8@gmail.com",telefono:12011518,dni:454444558}
];

let eventos = [
	{ id_evento: "00001", titulo: "ROCK EN VIVO", descripcion: "festival de rock en vivo", url: "www.cerrano.com", patrocinador:"SAGABELLA", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00002", titulo: "POLLADA BAILABLE", descripcion: "pollada bailable de la sra bartra en univ.", url: "www.cerrano.com", patrocinador:"SAGABELLA2", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00003", titulo: "PROYECCION DE ONE PIECE", descripcion: "festival otaku con proyeccion de one piece Z", url: "www.cerrano.com", patrocinador:"SAGABELLA3", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00004", titulo: "SHINGEKY NO KYOJIN", descripcion: "Reunion para amantes del anime SNK y se hara eventos", url: "www.cerrano.com", patrocinador:"SAGABELLA4", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" }
];

let tickets = [ 
{ id_ticket: "ACMQ1120", precio: 50, puerta: "2", fila: "4", asiento: "21", _evento: "00001", _usuario: "00001" },
{ id_ticket: "ACMQ1121", precio: 70, puerta: "3", fila: "2", asiento: "11", _evento: "00002", _usuario: "00002" },
{ id_ticket: "ACMQ1122", precio: 40, puerta: "4", fila: "3", asiento: "31", _evento: "00003", _usuario: "00003" },
{ id_ticket: "ACMQ1123", precio: 30, puerta: "5", fila: "1", asiento: "41", _evento: "00004", _usuario: "00004" },
{ id_ticket: "ACMQ1124", precio: 20, puerta: "6", fila: "4", asiento: "51", _evento: "00003", _usuario: "00005" },
{ id_ticket: "ACMQ1125", precio: 10, puerta: "7", fila: "5", asiento: "61", _evento: "00002", _usuario: "00006" }
];


db.usuarios.insertMany(usuarios);
db.eventos.insertMany(eventos);
db.tickets.insertMany(tickets);


//while ( cursor.hasNext() ) {
//   printjsononeline( cursor.next() )
//}
