var firstName = "tanvi";   
let lastName = "gadhamsetty";     
const age = 20;            
console.log("First Name:", firstName);
console.log("Last Name:", lastName);
console.log("Age:", age);

var globalVar = "Global Scope"; // Global scope

function outerFunction() {
    let outerVar = "Outer Function Scope";

    function innerFunction() {
        let innerVar = "Inner Function Scope";
        console.log(globalVar); 
        console.log(outerVar);  
        console.log(innerVar);  
    }

    innerFunction();
    
}

outerFunction();