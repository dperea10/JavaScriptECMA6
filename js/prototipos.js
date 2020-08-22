// /*Función constructora*/
// function Animal(nombre, genero) {
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;

//     //Métodos
//     this.sonar = function() {
//         console.log("Sonido");
//     }
// }


// const snoopy = new Animal("Snoopy", "Macho"),
//     lolaBunny = new Animal("LolaBunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);


/*Función constructora donde se le asigna los métodos al prototipo, no a la función como tal */
// function Animal(nombre, genero) {
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;
// }
// //Métodos agregados al prototipo de la función constructora
// Animal.prototype.sonar = function() {
//     // console.log("entre aca");
//     console.log(`Sonido de ${this.nombre}`);
// }

// const snoopy = new Animal("Snoopy", "Macho"),
//     lolaBunny = new Animal("LolaBunny", "Hembra");

// console.log(snoopy);
// console.log(lolaBunny);

// snoopy.sonar();
// lolaBunny.sonar();