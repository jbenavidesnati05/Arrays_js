// En los array permiten guardar una coleccion de informacion 

let numbers= [1,2,3,4,5,6,7,8];

// Para conocer la longitud 

console.log(numbers.length);

// Para llamar un valor del array 

console.log(numbers[1]);

//Para acceder a la ultima posicion 
console.log(numbers[numbers.length-1]);

// Agregar un elemento al final (mutabilidad)
numbers.push(9);

// Agregar un elemento al principio (mutabilidad)
numbers.unshift(100);

// Agregar un elemento en alguna posicion 
// (posicion/eliminar/valor)
numbers.splice(2,0,99)

//Para eliminar al final
numbers.pop()

// para poder recorrer todo el array 

for( let i=0;i<numbers.length;i++){
    console.log(numbers[i])
    document.write(numbers[i])
}
document.write("<br>")


numbers.push("9");

// concatenar 
let beers = ["poker","aguila","hineken","chicha"];
let wines =["rosa","chardonay","merlot"];

console.log(beers);
console.log(wines);

//inmutables (cuando no modifica el array)


const drinks =beers.concat(wines);
console.log(drinks);
document.write(drinks)

// para que nos devuelva la posicion de un elemento 

console.log(beers.indexOf("poker"));

const beer2 = beers.slice(1,3);
console.log(beer2);

//mutables (cuando si modifica el array)

numbers.fill("pato",1,4);
console.log(numbers);

// crear objetos 

const cerveza = [
    {
        name : "poker",
        price : 5.2,
        alcohol : 4,

    },

    {
        name : "aguila",
        price : 5.5,
        alcohol : 2,

    },

    {
        name : "club",
        price : 3,
        alcohol : 4,

    }
]

console.log(cerveza);

// guardar una funcion dentro de una variable 
// conceptos de funcion de primer orden y de orden superior

// funcion de primer orden 
let fn = function(){
    console.log("hello")
}
// funcion de orden superior 
function some(f){
    console.log(" algo antes");
    f();
    console.log("algo despues"); 
    }

some(fn)