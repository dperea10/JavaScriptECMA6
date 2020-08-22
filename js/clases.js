class Animal {

    constructor(nombre, genero) {
        this.nombre = nombre;
        this.genero = genero;

    }

    //Métodos

    sonar() {
        console.log(`Método 1 sonar() ${this.nombre}`);
    }

    ladrar() {
        console.log(`Método 2 ladrar() ${this.nombre}`);
    }

}

//Herecias con las clases

class Perro extends Animal {
    constructor(nombre, genero, tamano) {
        //con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        //se agrega el nuevo parámetro del constructor
        this.tamano = tamano;
    }
}

const gato = new Animal("Mimi", " Hembra"),
    perro = new Perro("Coco", " Macho", "Gigante");

console.log(gato);
console.log(perro);

gato.sonar();
perro.ladrar();