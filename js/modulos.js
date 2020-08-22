import saludar, { Saludar, PI, usuario } from "./objectConsole.js";
import { operaciones as calculo } from "./operadores.js";


console.log(usuario);

console.log(calculo.suma(2, 8));
console.log(calculo.resta(22, 8));
saludar();

let saludo = new Saludar();