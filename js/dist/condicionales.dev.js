"use strict";

// /* Condicionales
//     if(){}
//     else if(){}
//     else{}
// */
// var resultado =
//     [
//         numero = false,
//         numero2 = true
//     ];
// console.log(resultado);
// switch (resultado) {
//     case (resultado[0] != resultado[0] || resultado[1] != resultado[1]):
//         console.log('Tu color es azul:');
//         break;
//     case (resultado[0] == resultado[0] || resultado[1] == resultado[1]):
//         console.log('Tu color es verde:');
//         break;
//     case (resultado[0] == resultado[0] || resultado[1] == resultado[1]):
//         console.log('Tu color es rojo:');
//         break;
// }
// let i = 5;
// console.log(++i);
// let cambio = i;
// console.log(i++);
// console.log(i)
// //let ca = i;
// console.log(i)
// const colores = {
//     amarillo: "amarillo",
//     azul: "azul",
//     rojo: "rojo"
// };
// let { amarillo, azul, rojo } = colores;
// console.log(colores)
// if (colores.amarillo === "amarillo" && colores.azul === "azul") {
//     console.log("Amarillo");
// } else if (colores.azul === "azul") {
//     console.log("Azul");
// } else {
//     console.log("rojo");
// }
// Declarar la función
// function sumar() {
//     var numero1 = 8,
//         numero2 = 6;
//     let resultado = numero1 + numero2;
//     if (resultado >= 12) {
//         console.log("Mayor o igual que 12", resultado);
//     } else {
//         console.log("Es menor que 12", resultado);
//     }
// }
// sumar();
// //ejecutar
var sumar = function sumar(numero1, numero2) {
  var resultado = numero1 + numero2;
  if (resultado >= 12) return console.log("Mayor o igual que 12", resultado);
  console.log("Es menor que 12", resultado);
};

sumar(6, 5);