let num1 = 10;
let num2 = 3;
let add = num1 + num2;
let sub= num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

console.log("Addition:", add);
console.log("Subtraction:", sub);
console.log("Multiplication:", mul);
console.log("Division:", div);
console.log("Modulus:", mod);

let result = (num1 + num2) * (num1 - num2);
console.log("Result with parentheses:", result);

// Comparison Operators
console.log("10 == '10':", 10 == '10');
console.log("10 === '10':", 10 === '10');
console.log("10 != '5':", 10 != '5');
console.log("10 !== '10':", 10 !== '10');
console.log("10 > 5:", 10 > 5);
console.log("10 < 20:", 10 < 20);
console.log("10 >= 10:", 10 >= 10);
console.log("10 <= 5:", 10 <= 5);

// Logical Operators
let a = true, b = false;
console.log("a && b:", a && b);
console.log("a || b:", a || b);
console.log("!a:", !a);