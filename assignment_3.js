let number = 100;          
let string = "Hello";      
let boolean = true;        
let null_val = null;         
let undefined_val;            

console.log("Number:", number, "Type:", typeof number);
console.log("String:", string, "Type:", typeof string);
console.log("Boolean:", boolean, "Type:", typeof boolean);
console.log("Null:", null_val, "Type:", typeof null_val);
console.log("Undefined:", undefined_val, "Type:", typeof undefined_val);

// Object Data Type
let person = {
    firstName: "tanvi",
    lastName: "gadhamsetty",
    age: 20,
    greet: function() {
        console.log("Hello, my name is " + this.firstName + " " + this.lastName);
    }
};

console.log("Person Object:", person);
person.greet();
person.age = 21; 
console.log("Updated Age:", person.age);