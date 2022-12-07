const Fuego = require("./Fuego");

class Bombero {
    //Estado/característica/campo
    bomberoJoven="sin nombre";
    bomberoExperimentado= "no nombre";
    nombre= "nom xdef";
    

    //comportamiento
    
    /* quienSos(){ 
        return "yo soy: " +this.bomberoJoven;
    }
     */
    miNombreEs(nuevoNombre){
        this.bomberoJoven=nuevoNombre;
    }

    /**
     * el bombero se presenta y se atribuye haber apagado el incendio
     * @returns el nombre del bombero que apagó el incendio
     */
    quienApagoElFuego(){  //quienesApaganElFuego
        return "Yo soy " +this.nombre+" , el bombero que apagó el incendio";
    }
    /**
     * 
     * @param {string} nuevoNombre 
     */
    setNombre(nuevoNombre){
        this.nombre=nuevoNombre;
    }

    getNombre(){
        return this.nombre;
    }
  

    /**
     * si el fuego está encendido hay que apagarlo sino se puede tomar mate
     * @param {string} fuego 
     */
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

