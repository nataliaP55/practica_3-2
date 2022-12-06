const Fuego = require("./Fuego");

class Bombero {
    //Estado/característica/campo
    bomberoJoven="sin nombre";
    bomberoExperimentado= "no nombre";
    nombre= "nom xdef";
   
    

    //comportamiento
    quienSos(){ 
        return "yo soy: " +this.bomberoJoven;
    }
    
    miNombreEs(nuevoNombre){
        this.bomberoJoven=nuevoNombre;
    }

  
    quienApagoElFuego(){  //quienesApaganElFuego
        return "Yo soy " +this.nombre+" , el bombero que apagó el incendio";
    }

    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }

    getNombre(){
        return this.nombre;
    }

   

     
    intentaApagarElFuego(fuego){
        console.log(this.nombre , "va a apagar el fuego");

        if (fuego.getFuegoEncendido()) {
            console.log("apagalo!!");
            fuego.apagate();
        } else {
            console.log("vamos a tomar mate");
        }
    }
    

    

}




module.exports = Bombero;

