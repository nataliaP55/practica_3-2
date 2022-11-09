const Fuego = require("./Fuego");

class Bombero {
    //Estado/característica/campo
    bomberoJoven="sin nombre";
    bomberoExperimentado= "no nombre";
    nombre= "nom xdef";
    //fuegoEncendido= true;
    //bomberoUno= "estado por def";  
    //bomberoDos="estado por defi"; 
    

    //comportamiento
    quienSos(){ //quienApagaElFuego / QuienEsElBomberoJoven
        return "yo soy: " +this.bomberoJoven;
    }
    
    miNombreEs(nuevoNombre){
        this.bomberoJoven=nuevoNombre;
    }

    /* quienEsElBomberoJoven(){  //quienesApaganElFuego
        return "Yo soy " +this. bomberoJoven+" , el bombero jóven";
    }
    
    quienEsElBomberoExperimentado(){  //quienesApaganElFuego
        return "Yo soy " +this. bomberoExperimentado+" , el bombero viejo";
    }
 
 */
  /*   miNombreEs(nuevoNombre){
        this. bomberoExperimentado=nuevoNombre;
    }

    miNombreEs(nuevoNombre){
        this. bomberoJoven=nuevoNombre;
    } */

  
    quienApagoElFuego(){  //quienesApaganElFuego
        return "Yo soy " +this.nombre+" , el bombero que apagó el incendio";
    }

    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }

    getNombre(){
        return this.nombre;
    }

   
    

    // hacer que bomberoUno interactue con bombero 2 - pedro le dice a juan "decime si apagaste el fuego"= true 
    //que ambos apaguen el fuego- juan y pedro son bomberos?= true

   /*  apagaEl(fuego){
       // console.log("apagá el " , fuego.miNombreEs());
        fuego.intentaApagarElFuego(this);
    } */
    intentaApagarElFuego(fuego){
        console.log(this.nombre , "va a apagar el fuego");

        if (fuego.getFuegoEncendido()) {
            console.log("apagalo!!");
            fuego.apagate();
        } else {
            console.log("vamos a tomar mate");
        }
    }
    

     /*    
     decimeSiTenesLaPelota (pedro){
        return this.tenerLaPelota
    } 
     pasaleLaPelotaA (unCompaniero){
        this.patearLaPelota ()
        unCompaniero.recibirLaPelota()

    } */
/*     quienTieneLaPelota(){
        return "ahora tiene la pelota "+this.nombre;
    }

    ahoraTieneLaPelota(nombreJugador){
        this.nombre=nombreJugador;
    }

    pasaleLaPelotaA(){
        //this.otroNombre=otroJugador
        return "Le pasa la pelota a " + this.otroNombre;
    }

    recibeLaPelota(otroJugador){
        this.otroNombre=otroJugador;
    } */

    

}




module.exports = Bombero;

