const Bombero = require("./Bombero");

class Fuego {

    fuegoEncendido= true; 

     // cambio de estado a fuego apagado
  


    getFuegoEncendido(){
        return this.fuegoEncendido;
    }

    apagate(){
        this.fuegoEncendido=false
    }
}



module.exports = Fuego;