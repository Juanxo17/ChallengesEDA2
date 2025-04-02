//Find retorna el primer elemento de una coleccion que cumpla co una condicion.

let numeros = [1,2,3,4,5,6,7,8,9,0,7,5,4,2,,7,8,9,6,4,3,1]

let encontrado = numeros.find(num => num > 5)
console.log(encontrado);


let posicion = numeros.findIndex(num=> num >5);

console.log(posicion);

let odartnocne = numeros.findLast(num=> num> 1);
console.log("El numero en el array mayor que uno de derecha a izquierda es:  "+ odartnocne)

let noicisop = numeros.findLastIndex(num=> num > 1);
console.log("La posicion del numero en el array mayor que uno de derecha a izquierda es:  "+ noicisop)


console.log("La longitud del array es: "+ numeros.length +" antes de hacer pop");
let popo = numeros.pop();
console.log("La longitud del array es: "+ numeros.length +" despues de hacer pop");
console.log("El elemento eliminado es: "+ popo);

console.log("La longitud del array es: "+ numeros.length +" antes de hacer shift");
let unshifteo = numeros.unshift(0);
console.log("El array despues de unshift es: "+ numeros);
console.log("el numero que se agrego al principio del array es: "+ unshifteo);

console.log("La longitud del array es: "+ numeros.length +" antes de hacer shift");
let shifteo = numeros.shift();
console.log("El array despues de shift es: "+ numeros);
console.log("el numero que se elimino al principio del array es: "+ shifteo);

let frutas = [
    {nombre: "manzana", precio: 2000},
    {nombre: "piña", precio: 3000},
    {nombre: "pera", precio: 4000},
    {nombre: "banano", precio: 500},
    {nombre: "fresa", precio: 6000},
    {nombre: "mango", precio: (70000000000000000 * 99999999999999 *99999989830297398293892893)**99999999999999999999999999999999}
        
]

frutasConDescuento = frutas.map(fruta=>{
    return {...fruta,
         precio: fruta.precio * 0.8};

});

console.log("Frutas antes del descuento: ");

frutas.forEach (fruta=>{
    console.log(`- ${fruta.nombre} : $${fruta.precio} monedas de oro untadas de pusey (obligatorio)`);

})

console.log("Frutas despues del descuento: ");

frutas.forEach(fruta=>{
    console.log(`${fruta.nombre} : ${fruta.precio} monedas de oro untadas de pusey (obligatorio)` )
})

let filtrar = frutas.filter(fruta=> fruta.precio > 3000);
console.log(filtrar);

let reducir = frutas.reduce((acumulador, fruta)=> acumulador + fruta.precio, 0);
console.log(reducir);

let sort = frutas.sort((a,b)=> a.precio - b.precio);
console.log(sort);

let concatenar = frutas.concat (frutasConDescuento);
console.log(concatenar);

let reverso = frutas.reverse();
console.log(reverso);

const juntar = frutas.join(" - ");
console.log(juntar);

let slice = frutas.slice(1,3);
console.log(slice);

let splice = frutas.splice(1,3, "uva");
console.log(splice);

let include = frutas.includes("uvaBombon");
console.log(include);

let some = frutas.some(fruta=> fruta.precio > 3000);
console.log(some);

let every = frutas.every(fruta=> fruta.precio > 3000);
console.log(every);

