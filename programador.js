const later = require('later');
const EventEmitter = require('events');

class Programador extends EventEmitter {
    occurrences
    constructor(programa){
        super()
     this.programa=programa;
    }
    programar(){
        later.date.localTime();
       console.log('este es el segundo' ,this.programa)
    
    for (let i=0; i<this.programa.length; i++){
        console.log(this.programa[i].hora)
        const sched = later.parse.text(`at ${this.programa[i].hora}`);

        later.setInterval(() => this.emit('temperatura',this.programa[i].temperatura), sched);
    }
   
    }
}


exports = module.exports = Programador;
