const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let llenarArray = function (numeros) {
    for (let i = 0; i < 26; i++) {
        numeros.push(i);
    }
    console.log("La longitud final del arreglo números es: " + numeros.length);
};

llenarArray(numeros);

let adivinarPosicion = function (numeros, callback) {
    rl.question("Ingresa un numero del 1 al 9: ", (respuesta) => {
        let numeroUser = Number(respuesta);

        if (numeros.at(-1) === numeroUser) {
            console.log("Has adivinado que el ultimo numero del array era el 25, y tambien te diste cuenta de que debiste verificar si el array de numeros era el mismo que usé en la funcion anterior. Cara alfombrilla.");
        } else {
            let XD = numeros.at(-1);
            console.log(`Ese no era el ultimo numero del array, sos un mamaguebo XDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD, respuesta correcta: ${XD}`);
        }

        if (callback) {
            callback();
        }
    });
};

let frutas = ["manzana", "piña", "pera", "banano", "fresa", "mango"];

let queFrutasLlevo = function (callback) {
    rl.question("Que frutas llevo en el canasto? ", (respuesta) => {
        let frutaUser = respuesta.trim().toLowerCase();
        let index = frutas.indexOf(frutaUser);

        if (index !== -1) {
            console.log(`Yessir, la ${frutaUser} ese es uno de los elementos para armar la legendaria frutipipa tropical, estas de buenas. Anotala que son 6 nomás. Esta es la que esta en la posicion numero: ${index}`);
        } else {
            console.log(`Oigan a este, dizque ${frutaUser}, eso a caso es nejesario pa aramar la legendaria frutipipa tropical?`);
        }

        if (callback) {
            callback();
        }
    });
};

let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 2, 4, 2, 2];


adivinarPosicion(numeros, () => {
    queFrutasLlevo(() => {
        console.log("La ultima aparicion del numero 2 en el array fue en la posicion: " + numeros2.lastIndexOf(2));
        rl.close(); 
    });
});
