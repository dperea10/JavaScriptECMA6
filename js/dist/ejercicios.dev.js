// 1) Programa una función que cuente el número de caracteres de una cadena de texto, 
//pe. miFuncion("Hola Mundo") devolverá 10.
// const contarCaracteres = (texto = "") => (!texto) ?
//     console.warn("No ha ingresado el texto") :
//     console.info(` La cantidad de carcateres de
//        " ${texto}", tiene ${texto.length}, "carácteres" `);
// contarCaracteres("Diego Perea");
// console.log();
// // 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// const textoRecortado = (texto = "") => (!texto) ?
//     console.info({}) :
//     console.log(`Texto recortado a solo 4 carácteres "${texto.substr(0,1)}" `);
// textoRecortado();
// // 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, 
// // pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
// const convertirToArray = (texto = "", separador = undefined) =>
//     (!texto) ?
//     console.warn("No has ingresado nada") :
//     console.log(separador === undefined) ?
//     console.warn("No has ingresado un separador") :
//     console.log(texto.split(separador));
// convertirToArray("Hola que tal", " ");
// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
// function variasVeces(texto, veces) {
//     //Diego
//     for (let index = 1; index < veces; index++) {
//         //   texto += veces;
//         console.log(`${index}, ${texto}`);
//     }
// }
// variasVeces("Hola texto", 4);
// //Instructor
// const repetirTexto = (texto = "", veces = undefined) => {
//     if (!texto) return console.log("No ha ingresado el texto");
//     if (veces === undefined) return console.log("no ha ingresado las veces a repetir");
//     if (veces === 0) return console.log("Debe ser mayor a cero");
//     if (Math.sign(veces) === -1) return console.error("El número no puede ser negativo");
//     for (let index = 1; index < veces; index++) {
//         // texto += veces;
//         console.log(`${texto}, ${index}`);
//     }
// }
// repetirTexto("Repetir texto", 2)
// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
// String.prototype.reverse = function() {
//     var x = this.length;
//     var cadena = "";
//     while (x >= 0) {
//         cadena = cadena + this.charAt(x);
//         x--;
//     }
//     return cadena;
// };
// var x = new String("Hola Mundo");
// console.log("La cadena " + x + " invertida es " + x.reverse());
// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
// const contarTexto = (texto = "", palabrasRepetidas = "") => {
//     if (!texto) return console.log("No ha ingresado el texto");
//     if (!palabrasRepetidas) return console.log("No ha ingresado el texto que se repite");
//     let index = 0;
//     contador = 0;
//     while (index !== -1) {
//         index = texto.indexOf(palabrasRepetidas, index);
//         if (index !== -1) {
//             index++;
//             contador++;
//         }
//     }
//     return console.info(`En el párrafo ésta: ${palabrasRepetidas} se repite ${contador} veces`);
// }
// contarTexto("Este es el parrafo que se va a colocar", "l");
// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
// function palindromo() {
//     var texto;
//     var alReves;
//     texto = prompt("Introduce texto o palabra: ");
//     alReves = cambiar(texto);
//     if (texto == alReves) {
//         document.write("Palindromo");
//     } else {
//         document.write("No palindromo");
//     }
// }
// function cambiar(texto) {
//     return texto.split("").reverse().join("");
// }
// palindromo();
// const palindromoTexto = (texto = "") => {
//     if (!texto) return console.log("No ha ingresado el texto");
//     texto = texto.toLowerCase();
//     let cambiarTexto = texto.split("").reverse().join("");
//     return (cambiarTexto === texto) ?
//         console.log(`Si es palíndromo, ${texto}, Palabra al revés es ${cambiarTexto}`) :
//         console.log(`No es palíndromo, ${texto}`);
// }
// palindromoTexto("sa");
// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
// pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
// const eliminarCaracteres = (texto = "", caracteres = "") =>capicúa
//     (!texto) ?
//     console.warn("No ha ingresado el texto") :
//     (!caracteres) ?
//     console.warn("No ingresaste un patrón") :
//     console.info(texto.replace(new RegExp(caracteres, "ig"), ""));
// eliminarCaracteres();
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");
// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// const numeroAleatorio = (numeroMin = 501, numeroMax = 600) => {
//     let numRandon = Math.random(501, 600) * numeroMax;
//     if (numRandon < 600 && numRandon > 501) {
//         console.info("Entró :", numRandon.toFixed());
//     } else {
//         console.log("no entra en el rango", numRandon.toFixed())
//     }
// }
// numeroAleatorio();
//     (!numeroMin < 501) ?
//     console.warn("El numero no cumple") :
//     (!numeroMax > 600) ?
//     console.warn("Es muy alto") :
//     console.info(Math.random() * (numeroMax.toFixed() * numeroMin.toFixed()) + numeroMin.toFixed());
// numeroAleatorio();
// const aleatorio = () => console.log(Math.round((Math.random() * 100) + 500));
// aleatorio();
// 10) Programa una función que reciba un número y evalúe si es capicúa o no(que se lee igual en un sentido que en otro), 
//pe.miFuncion(2002) devolverá true.
// const recibirNumeroCapicua = (numero) => {
//     if (!numero) return console.warn("No ha ingresado el número");
//     let numeroCambiado = numero.toString().split('').reverse().join("");
//     return (numeroCambiado === numero.toString()) ?
//         console.log(`Si es Capicua, ${numero}, al revés es ${numeroCambiado}`) :
//         console.log(`No es Capicua, ${numero}`);
// }
// recibirNumeroCapicua(2222221);
// const recibirNumeroCapicua = (numero) => {
//         //     if (!numero) return console.warn("No ha ingresado el número");
//     let numeroCambiado = numero.toString().split('').reverse().join("");
//     return (numeroCambiado === numero.toString()) ?
//         console.log(`Si es Capicua, ${numero}, al revés es ${numeroCambiado}`) :
//         console.log(`No es Capicua, ${numero}`);
// }
// recibirNumeroCapicua(2222221);
// 11) Programa una función que calcule el factorial de un número(El factorial de un entero positivo n, 
//se define como el producto de todos los números enteros positivos desde 1 hasta n), pe.miFuncion(5) devolverá 120.
// const factorialEntero = (numeroFact) => {
//     if (!numeroFact) return console.warn("No ha ingresado el número");
//     let resultFactorial = 0;
//     for (let index = numeroFact; index > 0; index--) {
//         resultFactorial *= index;
//         console.log(`${numeroFact},"Es el factorial "${(numeroFact -1) * numeroFact}  ${resultFactorial}`);
//     }
//     console.log(resultFactorial);
//     return resultFactorial;
// }
// factorialEntero(1);
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
// pe. miFuncion(7) devolverá true.
// const numeroPrimo = (numero) => {
//     if (!numero) return console.warn("No ha ingresado el número");
//     if (numero == 0 || numero == 1 || numero == 4) return console.info(`el numero ${numero}, no es primo: por lo tanto es ${false} `);
//     for (let index = 2; index < numero / 2; index++) {
//         if (numero % index == 0) return console.info(`el numero ${numero}, no es primo: por lo tanto es ${false} `);
//     }
//     return console.log(`el numero ${numero}, si es primo: por lo tanto es ${true} `);
// }
// const listaDeNumeros = [1, 2, 3, 4, 50, 60, 500, 1312, 7];
// listaDeNumeros.forEach(numero => {
//     // console.log(numeroPrimo(numero))
//     console.info("Listado de numeros :", numero);
//     numeroPrimo(numero);
// });
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
// const numeroImpar = (numero) => {
//     if (!numero) return console.warn("No ha ingresado el número");
//     if (numero % 2 == 0) return console.info(`el numero ${numero}, es par`);
//     return console.log(`el numero ${numero}, si es impar `);
// }
// numeroImpar(23);
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
// const convertir = (select, temperature) => {
//     if (!select) return console.warn("Debe seleccionar uno para calcular C y 2 para F");
//     if (!temperature) return console.warn("No ha ingresado el valor de la temperatura");
//     if (select === 1) {
//         calcularFahrenheit = temperature * 9 / 5 + 32;
//         console.log(`Seleccionó calcular ${temperature} C° a Fahrenheint, y eso es ${Math.floor(calcularFahrenheit)} F° `);
//     } else if (select === 2) {
//         calcularCelsius = (temperature - 32) * 5 / 9;
//         console.log(`Seleccionó calcular ${temperature} F° a Celsius, y eso es ${Math.floor(calcularCelsius)} C° `);
//     } else {
//         console.log("No ha Selecionado 1 para C o 2 para F");
//     }
// }
// convertir(1, 32);
// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
"use strict";