/* En un nuevo proyecto usar al menos 2 clases que no hayamos visto donde:
Tienen que tener comportamientos para modificar estados (al menos 2 estados)
Los objetos tienen que poder interactuar con otros objetos de la misma clase (al menos 1 tipo de interaccion)
Los objetos tienen que poder interactuar con otros objetos de otra clase (al menos 1 tipo de interaccion) */


const Pelota = require("./Pelota");
const Jugador= require("./Jugador");

//identidad
const pelotaDeFutbol = new Pelota ();
const juan= new Jugador ();
const pedro = new Jugador ();

/* juan.Gambetear("Juan");
pedro.Gambetear("Pedro");*/

//console.log( juan.Nombre);
//console.log( juan.quienTieneLaPelota()); 



juan.ahoraTieneLaPelota("Juan");
//juan.decimeSiTenesLaPelota ();
console.log( juan.quienTieneLaPelota()); 

pedro.recibeLaPelota ("pedro");
console.log( pedro.pasaleLaPelotaA()); 