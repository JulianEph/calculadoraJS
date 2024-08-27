function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
//Creamos objetos usando el constructor 
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");

// Valores predeterminados de propiedad

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}

// Agregar una propiedad a un objeto
myFather.nationality = "English";

// Para agregar una nueva propiedad, debes agregarla al prototipo de la función constructora:
Person.prototype.nationality = "English";

//Metodos en funcion constructora 
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Agregar un method a un objeto
myMother.changeName = function (name) {
    this.lastName = name;
}

//Constructores de javascript integrados
new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object

let a = 20