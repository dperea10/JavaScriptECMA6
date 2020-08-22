// // 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// const contarCaracteres = (texto = "") => (!texto) ?
//     console.warn("No ha ingresado el texto") :
//     console.info(`La cantidad de carcateres de
//        "${texto}", tiene ${texto.length}, "carácteres"`);

// contarCaracteres("Diego Perea");
// console.log();


// // 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// const textoRecortado = (texto = "") => (!texto) ?
//     console.warn("No ha ingresado el texto") :
//     console.info(`Texto recortado a solo
//    "${texto}", 4 carácteres "${texto.substr(0,5)}" `);

// textoRecortado("Diego Perea");

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

const eliminarCaracteres = (texto = "", caracteres = "") =>
    (!texto) ?
    console.warn("No ha ingresado el texto") :
    (!caracteres) ?
    console.warn("No ingresaste un patrón") :
    console.info(texto.replace(new RegExp(caracteres, "ig"), ""));


eliminarCaracteres();
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz");