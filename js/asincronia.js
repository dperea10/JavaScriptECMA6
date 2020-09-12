/* // Estos son callback

function cuadradoCallback(value, callback) {

    setTimeout(() => {
        callback(value, value * value);
    }, 0 | Math.random() * 1000);

}

cuadradoCallback(0, (value, result) => {
    console.log("Inicia Callback");
    console.log(`Callback::${value}, ${result} `);
    cuadradoCallback(1, (value, result) => {
        console.log(`Callback::${value}, ${result} `);
        cuadradoCallback(2, (value, result) => {
            console.log(`Callback::${value}, ${result} `);
            cuadradoCallback(3, (value, result) => {
                console.log(`Callback::${value}, ${result} `);
                cuadradoCallback(4, (value, result) => {
                    console.log(`Callback::${value}, ${result} `);

                });

            });

        });


    });
}); */


// Esto son las promesas en JavaScript (reemplaza las callback)
/* 
function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor: "${value}",  no es un número`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}

cuadradoPromise(0)
.then(objetc =>{
    // console.log(objetc);
    console.log('Init Promise');
    console.log(`Promise::  ${objetc.value}, ${objetc.result}`);
    return cuadradoPromise(1);
})
.then(objetc =>{
    // console.log(objetc);
    console.log(`Promise::  ${objetc.value}, ${objetc.result}`);
    return cuadradoPromise(2);
})
.then(objetc =>{
    // console.log(objetc);
    console.log(`Promise::  ${objetc.value}, ${objetc.result}`);
    return cuadradoPromise(3);
})
.then(objetc =>{
    // console.log(objetc);
    console.log(`Promise::  ${objetc.value}, ${objetc.result}`);
    return cuadradoPromise("f");
})
.then(objetc =>{
    console.log(`Promise::  ${objetc.value}, ${objetc.result}`);
    console.log('Fin ');
  
})
.catch(err => console.error(err)); */



// Éstos es Async - Await en una funcion declarada

/* function cuadradoPromise(value) {
    if (typeof value !== "number") {
        return Promise.reject(`Error, el valor: "${value}",  no es un número`);
    }
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve({
                value,
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
} */

/* async function funcionAsincronaDeclara(){
    try{
        console.log('Inicio Async Function');
        // se utiliza la palabra reservada await
        let objetc = await cuadradoPromise(0);
        console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

        objetc = await cuadradoPromise(1);
        console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

        objetc = await cuadradoPromise(2);
        console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

        objetc = await cuadradoPromise(3);
        console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

        objetc = await cuadradoPromise(4);
        console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

        console.log(`Async Function: Fin`);

    }
    catch(err){
        console.error(err);
    }
}
funcionAsincronaDeclara(); */


// Éstos es Async - Await en una funcion Expresada (arrow function)


// const  funcionAsincronaExpresada = async() =>{
//     try{
//         console.log('Inicio Async Function');
//         // se utiliza la palabra reservada await
//         let objetc = await cuadradoPromise(6);
//         console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

//         objetc = await cuadradoPromise(7);
//         console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

//         objetc = await cuadradoPromise(8);
//         console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

//         objetc = await cuadradoPromise(9);
//         console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

//         objetc = await cuadradoPromise(10);
//         console.log(`Async Function: ${objetc.value}, ${objetc.result}`);

//         console.log(`Async Function: Fin`);

//     }
//     catch(err){
//         console.error(err);
//     }
// }
// funcionAsincronaExpresada();


// Tipos de datos Symbols

// let id = "hola";
// let id2 = "hola";
/* let id = Symbol();
let id2 = Symbol();

console.log(id === id2);


const NOMBRE = Symbol();

const persona = {
    [NOMBRE]: "Diego"
};

console.log(persona);

persona.NOMBRE = "Diego Perea";

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);
console.log(persona[NOMBRE]);


 /* */
/* 
const set = new Set([1,2,3,4,5, true, false, false,
[], {}, {}, "Hola", "hola"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
const set = new Set([1,2,3,4,5, true, false, false,
[], {}, {}, "Hola", "hola"]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(false);
set2.add(true);
set2.add({});
set2.add([]);

console.log(set2);
console.log(set2.size); */

// console.log("Correr set");
// for(item of set){
//     console.log(item);
// }

// console.log("Recorrer set2")
// set2.forEach(item => console.log(item));

// let arr = Array.from(set);
// console.log(arr);
// console.log(arr[1]);
/*
set.delete("hola");
console.log(set);

console.log(set.has("hola"));
console.log(set.has(12));

set2.clear();
console.log(set2);

console.log(set2.size); */

// console.log("Correr set");
// for(item of set){
//     console.log(item);
// }

// console.log("Recorrer set2")
// set2.forEach(item => console.log(item));

// let arr = Array.from(set);
// console.log(arr);
// console.log(arr[1]);
/*
set.delete("hola");
console.log(set);

console.log(set.has("hola"));
console.log(set.has(12));

set2.clear();
console.log(set2);
 */


//Maps parecido a los getter y setters


/* let mapa = new Map();

mapa.set("nombre", "Diego");
mapa.set("Apellido", "Perea")
mapa.set("Edad:", 31);

// console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));

mapa.set("nombre", "Diego Diego");
console.log(mapa.get("nombre"));
mapa.delete("Apellido");
console.log(mapa);


for(let [key, value] of mapa ){
    console.log(`Llave ${key}, Valor: ${value}`);
}



const mapa2 = new Map([

    ["nombre", "Diego"],
    ["Edad", 31],
    ["correo", "diego.perea@gmail.com"],
    [null, "Null"]

]);

console.log(mapa2);

const llaveMapa2 = [...mapa2.keys()];
const valueMapa2 = [...mapa2.values()];

console.log(llaveMapa2);
console.log(valueMapa2); */


//Iterables & iterador

// const interable = [1,2,3,4];
// const iterador = interable[Symbol.iterator]();

// console.log(interable);
// console.log(iterador);
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

// let next = iterador.next();

// console.log(next.done);