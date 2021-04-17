'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      // Creating a new variable with same name
      const firstName = 'Steven';
      
      output = 'NEW OUTPUT!';
      
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(add(2,3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

// ---------------------- Hoisting -------------------- //

// If we try to use the variables before initialization
// console.log(x); // undefined
// console.log(y); // ReferenceError
// console.log(z); // ReferenceError

var x = 1;  
let y = 2;
const z = 3;

console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false

// -----------------------

// console.log(functionDeclaration()); // Function declaration
// console.log(fuctionExpression()); // ReferenceError
// console.log(functionArrow()); // ReferenceError

function functionDeclaration() {
  console.log('Function declaration');
}

const fuctionExpression = function () {
  console.log('Function Expression');
}

const functionArrow = () => console.log('functionArrow');







