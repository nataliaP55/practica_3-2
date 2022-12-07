const Bombero = require("./Bombero");

class Fuego {

    fuegoEncendido= true; 

     // cambio de estado a fuego apagado
  
    /**
     * 
     * @returns el fuego está encendido
     */

    getFuegoEncendido(){
        return this.fuegoEncendido;
    }
    /**
     * cambia de estado y está apagado
     */
    apagate(){
        this.fuegoEncendido=false
    }
}



module.exports = Fuego;