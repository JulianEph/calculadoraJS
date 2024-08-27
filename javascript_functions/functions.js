// Se llama a la función, el valor de retorno terminará en x
let x = myFunction(4, 3);

function myFunction(a, b) {
// La función devuelve el producto de a y b
    return a * b;
}

// Siempre recordar que a la hora de llamar a la funcion debo pasarle el parametro segun esta creada, si la funcion tiene 2 parametros tiene que recibir 2 por ende. 

funcion_prueba = myFunction(2,4)

// En lugar de utilizar una variable para almacenar el valor de retorno de una función:
let y = toCelsius(77);
let text = "The temperature is " + y + " Celsius";

// Puedes usar la función directamente, como valor de variable:
let text = "The temperature is " + toCelsius(77) + " Celsius";


// Variables locales, las variables declaradas dentro de una funcion son variables locales, es decir, solo se pueden usar dentro de la funcion

// code here can NOT use carName

function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
}

  // code here can NOT use carName