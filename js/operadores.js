// //OPERADORES ARITMETICOS

// var primerNumero = 2;
// var segundoNumero = 2;


// //suma

// var suma = primerNumero + segundoNumero;

// console.log('Suma:', suma);

// //Resta

// var resta = primerNumero - segundoNumero;

// console.log('Resta:', resta);


// //Múltiplicación

// var multiplicacion = primerNumero * segundoNumero;

// console.log('Multiplicación:', multiplicacion);


// //División

// var division = primerNumero / segundoNumero;

// console.log('División:', division);

// // Módulo

// var modulo = primerNumero % segundoNumero;

// console.log('Módulo:', modulo);


// // ++ Incrementar

// var incrementar = ++primerNumero;

// console.log('Incrementar:', incrementar);


// // -- Decrementar

// var decrementar = --primerNumero;

// console.log('Decrementar:', decrementar);


// // OPERADORES DE ASIGNACIÍON

// var tercernumero;

// // =  asigna un valor
// // += asigna un valor sumandole el anterior
// // -= asigna un valor resta el anterior
// // *=
// // /=

// console.log('Asignacion', tercernumero = suma)
// console.log('Asgina y suma', tercernumero += suma)
// console.log('Asigna y resta', tercernumero -= suma)
// console.log('Asigna y multi', tercernumero *= suma)
// console.log('Asigna y divide', tercernumero /= suma)


// console.log('Concatenar: ' + tercernumero + ',' + primerNumero + ',' + segundoNumero)

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;

}

export const operaciones = {
    suma,
    resta
};