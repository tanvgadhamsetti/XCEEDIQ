// If-Else Statements
let numberToCheck = 15;

if (numberToCheck < 10) {
    console.log("The number is less than 10");
} else if (numberToCheck > 10 && numberToCheck < 20) {
    console.log("The number is between 10 and 20");
} else {
    console.log("The number is 20 or greater");
}

// Switch Statements
let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow.");
        break;
    case "apple":
        console.log("Apples are red or green.");
        break;
    case "orange":
        console.log("Oranges are orange.");
        break;
    default:
        console.log("Unknown fruit.");
}
