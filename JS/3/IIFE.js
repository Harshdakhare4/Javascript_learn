// Immediately Invoked Function Expressions (IIFE)
// Why Do We Use IIFE?
//ANS:- Avoid Polluting the Global Scope
// Variables declared inside an IIFE are not accessible outside, preventing conflicts.
// Execute Code Immediately

// If we need to run some setup logic immediately (e.g., database connection, configuration loading), IIFE is useful.
// Encapsulation of Variables

// Any variable declared inside an IIFE remains private and doesn't affect the global scope.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')