// new Map() method

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// set() method
// Create a Map
const fruits_b = new Map();

// Set Map Values
fruits_b.set("apples", 500);
fruits_b.set("bananas", 300);
fruits_b.set("oranges", 200);

// El método set() también se puede utilizar para cambiar los valores del mapa existentes:
fruits.set("apples", 200);

// get() method
fruits.get("apples");    // Returns 500

// typeof
// Returns object:
typeof fruits;

// instanceoff
// Returns true:
fruits instanceof Map;