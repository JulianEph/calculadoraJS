// Objetos de la vida real
//En la vida real, los objetos son cosas como: casas, automóviles, personas, animales o cualquier otro sujeto.

A//quí hay un ejemplo de objeto de automóvil:

// Propiedades de un automovil:
car.name = fiat 
car.model = 500
car.weight = "850kg"
car.color = white 

// Metodos
car.start()
car.drive()
car.brake()
car.stop()

const car = {type:"Fiat", model:"500", color:"white"};

//1* forma de crear un objecto 
const persona_c = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//2* forma de crear un objecto
const persona = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Otra forma de hacerlo es primero crear el objeto y leugo darle las propiedades
const person_a = {}

//Agrego las propiedades
person_a.firstname = "John"
person_a.lastName = "Doe"
person_a.age = 50
person_a.eyeColor = "blue"

//Acceder a objetos 

//1* forma:
objectName.propertyName
person.lastName;

//2* forma:
objectName["propertyName"]
person["lastName"];

//Ejemplo de methods
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

//Agregar Nuevas Propiedades 
person.nationality = "English";

//Eliminar propiedades
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;

// Otra forma:
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person["age"];

//Nested Objects 
myObj = {
    name:"John",
    age:30,
    myCars: {
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
}

// Para poder acceder al objeto myCars dentro de myObj 
// Sintaxis: objeto_main.objeto_secundario.propiedad 
myObj.myCars.car2;

// Otras formas:
myObj.myCars["car2"];
myObj["myCars"]["car2"];

// Ejemplo
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

//Agregar Metodos a un objeto 
person.name = function () {
    return this.firstName + " " + this.lastName;
};
//Otra forma: (Usando toUpperCase() )
person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

//Mostrar un objeto 

// Crear un objeto
const persona_e = {
    name: "John",
    age: 30,
    city: "New York"
};

document.getElementById("demo").innerHTML = persona_e;

//Mostrar Propiedades Objeto
document.getElementById("demo").innerHTML =
persona_e.name + "," + persona_e.age + "," + persona_e.city;

//Mostrar Propiedades En Loop 
// Creo el objeto
const person_b = {
    name: "John",
    age: 30,
    city: "New York"
};

  // Creo un texto
let text = "";
for (let x in person_b) {
    text += person_b[x] + " ";
};

  // Mostrar texto
document.getElementById("demo").innerHTML = text;

// Usando object.values()
// Creo el objeto
const person_p = {
    name: "John",
    age: 30,
    city: "New York"
};

  // Create an Array
const myArray = Object.values(person_p);

  // Display the Array
document.getElementById("demo").innerHTML = myArray;

// Object.entries() simplifica el uso de objetos en bucles:
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text_a = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text_a += fruit + ": " + value + "<br>";
}

//Usando json.stringify()
// Creo objeto
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

  // Stringify Object
let myString = JSON.stringify(person);

  // Mostrar String
document.getElementById("demo").innerHTML = myString;