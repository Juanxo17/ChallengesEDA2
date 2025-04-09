const persona = {
    nombre: "Juan",
    edad: 25,
    saludar: function() {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    },
    envejecer: function(años) {
        this.edad += años;
        console.log(`Ahora tengo ${this.edad} años.`);
    }
};

persona.saludar(); // Hola, soy Juan y tengo 25 años.
persona.envejecer(5); // Ahora tengo 30 años.
persona.saludar(); // Hola, soy Juan y tengo 30 años.


//

const persono = {
    nombre: "Ana",
    edad: 28,
    envejecer: function(años) {
        setTimeout(() => {
            this.edad += años;
            console.log(`Ahora tengo ${this.edad} años.`);
        }, 1000 );
    }
};

persono.envejecer(2); 
