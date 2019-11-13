//cursor = db.veterinaria.find()

db = connect("mongodb://localhost:27017/adqui");
//let evento= db.collection('eventos');
db.createCollection('eventos');

//let ticket= db.collection('tickets');
db.createCollection('tickets');

//let usuario= db.collection('usuarios');
db.createCollection('usuarios');


let usuarios = [{
        id_usuario: "00001",
        username: "ACM1",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2000-03-17"),
        correo: "harold1a96@gmail.com",
        telefono: 51411511,
        dni: 444444551,
        _eventos: ["00001"]
    },
    {
        id_usuario: "00002",
        username: "ABM2",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2010-03-17"),
        correo: "fr3dy.ccahuana@gmail.com",
        telefono: 12011512,
        dni: 454444552,
        _eventos: ["00002"]
    },
    {
        id_usuario: "00003",
        username: "ACM3",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2000-03-17"),
        correo: "junyorar98@gmail.com",
        telefono: 51411513,
        dni: 444444553
    },
    {
        id_usuario: "00004",
        username: "ABM4",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2010-03-17"),
        correo: "pdelacruzv@unmsm.edu.pe",
        _eventos: ["00001"],
        telefono: 12011514,
        dni: 454444554
    },
    {
        id_usuario: "00005",
        username: "ACM5",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2000-03-17"),
        correo: "abc5@gmail.com",
        telefono: 51411515,
        dni: 444444555
    },
    {
        id_usuario: "00006",
        username: "ABM6",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2010-03-17"),
        correo: "deg6@gmail.com",
        telefono: 12011516,
        dni: 454444556
    },
    {
        id_usuario: "00007",
        username: "ACM7",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2000-03-17"),
        correo: "abc7@gmail.com",
        telefono: 51411517,
        dni: 444444557
    },
    {
        id_usuario: "00008",
        username: "ABM8",
        password: "$2y$10$vqcNHh1O8nlOEJF.H/b4Nu3UDoYJuO5RELS8R3NXKZCqAZTXe.zna",
        fecha_nacimiento: new ISODate("2010-03-17"),
        correo: "deg8@gmail.com",
        telefono: 12011518,
        dni: 454444558
    }
];

/*let eventos = [
	{ id_evento: "00001", titulo: "ROCK EN VIVO", descripcion: "festival de rock en vivo", url: "www.cerrano.com", patrocinador:"SAGABELLA", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00002", titulo: "POLLADA BAILABLE", descripcion: "pollada bailable de la sra bartra en univ.", url: "www.cerrano.com", patrocinador:"SAGABELLA2", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00003", titulo: "PROYECCION DE ONE PIECE", descripcion: "festival otaku con proyeccion de one piece Z", url: "www.cerrano.com", patrocinador:"SAGABELLA3", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" },
	{ id_evento: "00004", titulo: "SHINGEKY NO KYOJIN", descripcion: "Reunion para amantes del anime SNK y se hara eventos", url: "www.cerrano.com", patrocinador:"SAGABELLA4", fecha_evento: new ISODate("2009-05-17"), hora_inicio_general: new ISODate("2010-03-17"), hora_final_general: new ISODate("2010-03-18"), lugar: "SM" }
];
*/
let eventos = [{
        id_evento: "00001",
        titulo: "SUSAN OCHOA - Último concierto del año",
        descripcion: "El primer gran festival de la comedia ya tiene fecha. Este jueves 21 de noviembre a las 7:30 p.m. prepárate para doblarte de risa porque tenemos el mejor cartel de comediantes nacionales y extranjeros en el Centro de Convenciones María Angola. ¡Aprovecha la preventa y compra tus entradas en Joinnus.com!  Representando al Perú estarán los nuevos talentos de las redes sociales y el stand up comedy, Marisol Benavides y Mateo Garrido Lecca.  Desde Argentina, el gran Grego Rosello vuelve luego de 3 años a mostrarnos su último unipersonal. Finalmente desde Colombia llegará el tan esperado Lokillo con su personaje “Rastacuando”, que viene a demostrar todo su talento en el humor y lo multifacético de sus personajes.",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/975057/act5dade3a0256c8.jpg",
        patrocinador: "E&S Producciones y Eventos Oficial",
        fecha_evento: new ISODate("2019-01-16"),
        hora_inicio_general: new ISODate("2019-11-16"),
        hora_final_general: new ISODate("2019-11-30"),
        categoria: ["concierto", "cantante", "pop latino", "balada romantica"],
        lugar: "Estacion de Barranco"
    },
    {
        id_evento: "00002",
        titulo: "1° COMEDY FEST",
        descripcion: "Susan Ochoa, nuestra gran intérprete se despide de todos sus seguidores ofreciendo sus dos útimas presentaciones en vivo, sábados 16 y 30 de noviembre en La Estacion de Barranco, con su show La dueña Soy yo",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/2/5daa4a2ea7bac.jpg",
        patrocinador: "COMEDY FEST",
        fecha_evento: new ISODate("2019-11-21"),
        hora_inicio_general: new ISODate("2019-11-21"),
        hora_final_general: new ISODate("2019-11-22"),
        categoria: ["standup", "comedia", "chistes", "monologo"],
        lugar: "Centro de Convenciones del Hotel María Angola de Miraflores"
    },
    {
        id_evento: "00003",
        titulo: "MORAL DISTRAIDA (LIMA,PERÚ)",
        descripcion: "Moral Distraída, la banda juvenil chilena representante del Flow Latino regresa a Lima. Esta vez con un show propio de larga duración donde prometen hacer bailar a todo su público.\nPreviamente en 2018 deslumbraron con su impecable puesta en escena a todos los asistentes al Taytakunan Festival. Ahora, pretenden hacer bailar al todos en el mítico Sargento Pimienta.\nUna exquisita mezcla de ritmos como la salsa, la timba y el reggaeton, letras que hacen sátira de y ríen con la sociedad actual y 10 músicos sobre el escenario dan vida a la banda chilena que vino a renovar el sonido y color de la fiesta en Latinoamérica.",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/584503/act5da4ae232e146.jpg",
        patrocinador: "Pedro Luna",
        fecha_evento: new ISODate("2019-11-14"),
        hora_inicio_general: new ISODate("2019-11-14"),
        hora_final_general: new ISODate("2019-11-15"),
        categoria: ["concierto", "pop latino", "reggaeton", "cantante"],
        lugar: "Sargento Pimienta - Av. Francisco Bolognesi 757, Barranco"
    },
    {
        id_evento: "00004",
        titulo: "Visiones Art Festival 2019 I Proyecciones en el Planetario",
        descripcion: "Este viernes 15 de noviembre en el Planetario Digital de Lima se desarrollará la segunda temporada de Visiones Art Festival: Encuentro entre el mundo real y el mundo digital. Este reunirá a artistas digitales y proyectará en formato FullDome piezas gráficas de otro mundo.\nLas proyecciones Fulldome en los planetarios tienen la particularidad de generar espacios inmersivos, utilizando tecnología de producción digital para crear momentos memorables ante la percepción del cerebro humano. De esa manera, estos episodios se convierten en fuente de inspiración o de simple disfrute en nuestro corazón.\nVISIONES es el primer espectáculo FullDome en la ciudad. Este formato llega gracias a UP creativos y Fullscreen. \nwww.visiones.com.pe",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/1146948/5dc0bad3df3a1.jpg",
        patrocinador: "Visiones Art Festival",
        fecha_evento: new ISODate("2019-10-15"),
        hora_inicio_general: new ISODate("2019-10-15"),
        hora_final_general: new ISODate("2019-10-16"),
        categoria: ["arte", "proyeccion", "museo arte"],
        lugar: "Planetario Digital de Lima - Morro Solar de Chorrillos - Cruz de Luz"
    }, {
        id_evento: "00005",
        titulo: "Filo octavo corte: El Norte",
        descripcion: "¡La gran variedad gastronómica del norte en un solo lugar!nYa estamos pisando el verano y a todos nos provoca viajar al norte. Pero, como aún no son vacaciones, el norte viene a ti. Te traemos, Filo octavo corte: El norte. \n10 restaurantes presentan platos de tradición norteña, para que los goces todos en un mismo lugar.\nPueblo Viejo - Barrio - Moche - Ventarrón - Mayra Flores (Shizen) -  El Merlin de cabo blanco - Francesco De Sanctis (sibaris) - las conchas negras de Juanita - La picante - provinciano",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/137249/5daa6d92bc540.jpg",
        patrocinador: "FILO",
        fecha_evento: new ISODate("2009-12-07"),
        hora_inicio_general: new ISODate("2019-12-07"),
        hora_final_general: new ISODate("2019-12-07"),
        categoria: ["gastronomía", "comida", "festival"],
        lugar: "Domos Art Costa Verde San Miguel 15086"
    },
    {
        id_evento: "00006",
        titulo: "Brunch - In The Park Lima #2",
        descripcion: "BRUNCH - IN THE PARK ha generado tras cinco años de trayectoria en españa, su propia marca que persigue y mantiene los mismo objetivos en todas las ciudades presentes, este domingo 24 de noviembre presenta su segunda edición.\nUn día normal de setiembre se transformará en un festival para toda la familia que combina los mejores DJs y actuaciones en directo de la escena electrónica mundial con artistas locales emergentes, gastronomía, diseño y actividades para los más pequeños. Descubre tu nuevo día favorito de la semana con Brunch - In The Park Lima 2019.\nBrunch se compromete a ofrecer un programa de actividades sociales y medioambientales para impactar positivamente lugares aledaños, distrito y la ciudad de Lima. \nBITP ha sido el primer festival en adherirse al protocolo 'No Callem' contra el asalto sexual y acoso durante los eventos musicales en españa, lo que se replicará en Lima, además reafirma el compromiso con contra la Homofobia, trabajando para crear un ambiente donde todos los asistentes puedan sentirse libres y cómodos de expresarse como quieran. Además, el festival promueve el proyecto de solidaridad Social Fooding, recolectando los excedentes de alimentos de la ciudad y entregándolos a las personas necesitadas.",
        url: "https://s3-us-west-2.amazonaws.com/joinnus.com/user/61802/act5d70122436ec3.jpg",
        patrocinador: "Vastion Group",
        fecha_evento: new ISODate("2019-10-24"),
        hora_inicio_general: new ISODate("2019-10-24"),
        hora_final_general: new ISODate("2019-10-24"),
        categoria: ["djs", "reunion", "gastronomía"],
        lugar: "Fundo Mamacona - Parcela #3 Alameda Mamacona, Lurín\nParcela #3, Alameda Mamacona, Lurín 15841"
    }
];



let tickets = [
    { id_ticket: "ACMQ1120", precio: 50, puerta: "2", fila: "4", asiento: "21", estado: "libre", _evento: "00001", _usuario: "00001" },
    { id_ticket: "ACMQ1121", precio: 70, puerta: "3", fila: "2", asiento: "11", estado: "libre", _evento: "00002", _usuario: "00002" },
    { id_ticket: "ACMQ1122", precio: 40, puerta: "4", fila: "3", asiento: "31", estado: "libre", _evento: "00003", _usuario: "00003" },
    { id_ticket: "ACMQ1123", precio: 30, puerta: "5", fila: "1", asiento: "41", estado: "libre", _evento: "00004", _usuario: "00004" },
    { id_ticket: "ACMQ1124", precio: 20, puerta: "6", fila: "4", asiento: "51", estado: "libre", _evento: "00003", _usuario: "00005" },
    { id_ticket: "ACMQ1125", precio: 10, puerta: "7", fila: "5", asiento: "61", estado: "libre", _evento: "00002", _usuario: "00006" }
];


db.usuarios.insertMany(usuarios);
db.eventos.insertMany(eventos);
db.tickets.insertMany(tickets);


//while ( cursor.hasNext() ) {
//   printjsononeline( cursor.next() )
//}