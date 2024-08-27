// Passing Arguments
function greetPerson(name, greeting = "Hello") { // Default parameter
    console.log(`${greeting}, ${name}!`);
}

greetPerson("tanvi");
greetPerson("janu", "Hi");

// Returning Values
function square(x) {
    return x * x;
}

let squaredValue = square(5);
console.log("Squared Value:", squaredValue);

// Chaining Function Calls
function add(x, y) {
    return x + y;
}

function double(z) {
    return z * 2;
}

let chainedResult = double(add(5, 3));
console.log("Chained Function Result:", chainedResult);
