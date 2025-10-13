"use strict"; // enables ES5 features (2009) - https://javascript.info/strict-mode

/*
    Constants, Variables, Typeof, Strict Equality
*/
const PI = 3.1415; // constants are always capitalized

let helloWorld = "Hello, World!";
let helloWorldType = typeof(helloWorld); // typeof returns the constant or variable's type
let strictEqualityCheck = helloWorld === "Hello, World!";
console.log(helloWorld);
console.log(helloWorldType);
console.log(strictEqualityCheck);

/* 
    Mathematical operations are safe in JavaScript,
    The script will never stop with the fatal error ("die").
    At worst, we'll get NaN as the result.
*/
console.log(1 / 0);
console.log(NaN); // NaN and Infinity are only for numbers
console.log(-Infinity);
console.log(null);
console.log(undefined);

// TODO: Create a logger so I can quickly turn all toggles for debugging on and off
console.log(`Type of this: ${typeof ""}`);
console.log(`Type of this: ${typeof String()}`);
if ("" == String()) {
    console.log("String Check Passed!");
}

/* 
    A number 0, an empty string "", null, undefined, and NaN all become false.
    Because of that they are called “falsy” values.
    Other values become true, so they are called “truthy”.
*/
if (0) { // 0 is falsy
  console.log("Never executes") 
}

if (1) { // 1 is truthy
    console.log("Always executes")
}

/* 
    A conditional operator "?" is used to assign a variable depending on a condition.
    DON'T use "?" as a replacement for "if".
*/
let a = 2;
let b = 3;
let conditionalOperatorTest = (a + b < 4) ? "Below" : "Over";
console.log(conditionalOperatorTest);

let login = "Director";
let message = (login == "Employee") ? "Hello" :
    (login == "Director") ? "Director" :
    (login == "") ? "No Login"  :
    "";
console.log(message);

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
let actualName = ( firstName || lastName || nickName || "Anonymous"); // SuperCoder
console.log(actualName);