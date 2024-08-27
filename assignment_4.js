// Explicit Type Conversion
let strNum = "123";
let convertedNum = Number(strNum);
let boolValue = Boolean(1);
console.log("Converted Number:", convertedNum);
console.log("Converted Boolean:", boolValue);

// Implicit Type Coercion
let implicitCoercion = "5" + 2; // String concatenation due to + operator
console.log("Implicit Coercion Result:", implicitCoercion); // "52"
let comparisonCoercion = "5" == 5;
console.log("'5' == 5:", comparisonCoercion); // true
