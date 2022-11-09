const Pelota = require("./Pelota");

class Jugador {
    //Estado/característica/campo
    nombre= "estado por def";  //Corriendo
    otroNombre="estado por defi"; 
    tenerLaPelota = "estado por defe"

    //comportamiento
/*     pasarLaPelota(){
        return "Le pasó la pelota a "+this.Nombre;
    }

    gambetear(alAdversario){
        this.Nombre = alAdversario; //this.Corriendo = alAdversario;
    } */

 /*    pasaleLaPelotaA (unCompaniero){
        this.patearLaPelota ()
        unCompaniero.recibirLaPelota()

    } */
    
  
    quienTieneLaPelota(){
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
    }

    
/*     patearLaPelota (){
        this.tenerLaPelota=false 
        console.log("pasó la pelota");
    }

    recibirLaPelota(){
        this.tenerLaPelota=true 
        console.log("recibe la pelota");
    }
    
    decimeSiTenesLaPelota (pedro){
        return this.tenerLaPelota
    } */
}




module.exports = Jugador;

