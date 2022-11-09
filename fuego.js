const Bombero = require("./Bombero");

class Fuego {

    fuegoEncendido= true; 

     // cambio de estado a fuego apagado
  
   /*   intentaApagarElFuego(unBombero){
        console.log(unBombero.getNombre() , "va a apagar el fuego");

        if (this.fuegoEncendido) {
            console.log("apagalo!!");
        } else {
            console.log("vamos a tomar mate");
        }
    } */

    getFuegoEncendido(){
        return this.fuegoEncendido;
    }

    apagate(){
        this.fuegoEncendido=false
    }
}













module.exports = Fuego;