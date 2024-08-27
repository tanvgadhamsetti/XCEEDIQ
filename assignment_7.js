"use strict"; // Enables strict mode

// Try to assign a value to an undeclared variable (will throw an error)
try {
    undeclaredVar = "This will cause an error in strict mode";
} catch (error) {
    console.log("Error in strict mode:", error.message);
}