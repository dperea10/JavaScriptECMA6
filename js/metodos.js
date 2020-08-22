class Animal {
    constructor(nombre, genero) {
            this.nombre = nombre;
            this.genero = genero;
        }
        //Métodos
    saludar() {
        console.log(`Método 1 sonar() ${this.nombre}`);
    }

}

//Herecias con las clases
class Dog extends Animal {
    constructor(nombre, genero, tamano) {
        //con el método super() se manda a llamar el constructor de la clase padre
        super(nombre, genero);
        //se agrega el nuevo parámetro del constructor
        this.tamano = tamano;
        this.raza = null;
    }

    //Métodos
    sonar() {
        console.log(`Método 2 sonar() ${this.nombre}`);
    }

    ladrar() {
        console.log(`Método 3 ladrar() ${this.nombre}`);
    }

    static queEres() {
        console.log("metodo estatico en javascripts")
    }

    get getRaza() {
        return this.raza;
    }

    set setRaza(raza) {
        this.raza = raza;
    }
}


Dog.queEres();

const gato = new Animal("Mimi", " Hembra"),
    perro = new Dog("Coco", " Macho", "Gigante");

console.log(gato);
console.log(perro);
console.log();

console.log(perro.getRaza);
perro.setRaza = "Pitbull";
console.log(perro.getRaza);

// gato.sonar();
perro.ladrar();