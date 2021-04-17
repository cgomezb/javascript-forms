// 'use strict';

// var firstName = 'Helva'; // Avoid using var declaration

const jack = {
  firstName: 'Jack',
  year: 1991,
  calcAge: function () {
    console.log(this);
    return 2037 - this.year;
  },
  // Avoid using arrow function inside of object expressions
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  }
};

jack.calcAge();
jack.greet();

// ----------------------------------------------------------

'use strict';

const test = {
  example: 1,
  add: function() {
    debugger
    console.log(this);
    console.log(this.example);

    const test = () => {
      debugger
      console.log(this);
    }
    test();
  }
};

test.add();

// ----------------------------------------------------------

// arguments is available using function expression
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
}

// arguments is not available using arrow function
var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}
