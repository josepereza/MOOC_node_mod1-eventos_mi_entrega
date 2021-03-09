const Habitacion = require('./habitacion');
const Climatizador = require('./climatizador');
const Termostato = require('./termostato');
const Programador = require('./programador')

const miProgramador=[
    { hora: "15:22",
      temperatura: 22
    },
    { hora: "15:23",
      temperatura: 18
    },
    { hora: "15:24",
      temperatura: 22
    },
    { hora: "15:25",
      temperatura: 17
    }
  ] 
 

miProgramador.forEach(element => console.log(element));

// Creamos una habitacion:
const dormitorio = new Habitacion();
dormitorio.temperatura = 22;

// Creamos un climatizador para la habitacion:
const climatizador = new Climatizador(dormitorio);

// Creamos un Termostato que mira la temperatura de la habitacion:
const termostato = new Termostato(dormitorio);
const programador = new Programador(miProgramador);
termostato.indicarTemperaturaIdeal(20);
programador.programar();
// Configuramos el termostato para controlar la temperatura:
termostato.on('muchofrio', () => climatizador.calentar());
termostato.on('muchocalor', () => climatizador.enfriar());

// Mostar la temperatura periodicamente:
termostato.on('tic', (temp) => console.log(`${temp.toFixed(1)}ºC`));
programador.on('temperatura',(tempideal)=>{console.log('mi temperatura ahora es ', tempideal);termostato.indicarTemperaturaIdeal(tempideal);
});
// Configurar la temp ideal a 20 grados:


// Encender el termostato:
termostato.encender();
