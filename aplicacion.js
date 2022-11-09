/* En un nuevo proyecto usar al menos 2 clases que no hayamos visto donde:
Tienen que tener comportamientos para modificar estados (al menos 2 estados)
Los objetos tienen que poder interactuar con otros objetos de la misma clase (al menos 1 tipo de interaccion)
Los objetos tienen que poder interactuar con otros objetos de otra clase (al menos 1 tipo de interaccion) */


const Fuego = require("./Fuego");
const Bombero= require("./Bombero");

//identidad
//const fuegoInicial = new Fuego ();
const bomberoUno= new Bombero ();
const bomberoDos = new Bombero ();
const incendio= new Fuego();

/* console.log(bomberoUno.quienEsElBomberoJoven());
console.log(bomberoDos.quienEsElBomberoExperimentado()); */

/* bomberoUno.miNombreEs("juan");
bomberoDos.miNombreEs("pedro"); */

/* console.log(bomberoUno.quienEsElBomberoJoven());
console.log(bomberoDos.quienEsElBomberoExperimentado()); */

bomberoUno.setNombre("juan");
bomberoDos.setNombre("pedro");

console.log(bomberoUno.quienApagoElFuego());
console.log(bomberoDos.quienApagoElFuego());

//bomberoUno.apagaEl(incendio);
bomberoUno.intentaApagarElFuego(incendio);
bomberoDos.intentaApagarElFuego(incendio);
/* juan.ahoraTieneLaPelota("Juan");
//juan.decimeSiTenesLaPelota ();
console.log( juan.quienTieneLaPelota()); 

pedro.recibeLaPelota ("pedro");
console.log( pedro.pasaleLaPelotaA());  */