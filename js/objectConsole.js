// console.log(console);
// Console.assert();
// Console.count();
// Console.debug();
// Console.dir();



// console.warn("sds");

//hay maas en https://developer.mozilla.org/es/docs/Web/API/Console


//Modulo importar y exportar

export const PI = Math.PI;

export let usuario = "Diego";

let contrasena = "12346789";

export default function saludar() {
    console.log("hola esto es un saludo");

}

export class Saludar {
    constructor() {
        console.log("Exportar Clase");
    }
}