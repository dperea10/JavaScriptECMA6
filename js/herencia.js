/*Función constructora donde se le asigna los métodos al prototipo, no a la función como tal */
function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}
//Métodos agregados al prototipo de la función constructora
Animal.prototype.sonar = function() {
        // console.log("entre aca");
        console.log(`Sonido de ${this.nombre}`);
    }
    //Herencia prototipica

function Perro(nombre, genero, tamano) {
    this.super = Animal;
    this.super(nombre, genero);
    this.tamano = tamano;

}


//Perro está heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de método el prototipo padre en el hijo

Perro.prototype.sonar = function() {
    console.log("El perrro ladra");

}

Perro.prototype.ladrar = function() {
    console.log("Entro al prototype ladrar");
}

const snoopy = new Perro("Snoopy", "Macho", "Pequeño"),
    lolaBunny = new Animal("LolaBunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
lolaBunny.sonar();

snoopy.ladrar();