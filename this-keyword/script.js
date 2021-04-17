// this

// 0. Directly => this = <window> (Global scope)

console.log(this);

// 1. Method => this = <Object that is calling the method>

const jonas = {
  name: 'Jonas',
  year: 1989,
  calcAge: function () {
    return 2037 - this.year;
  }
};

const matilda = {
  year: 2017,
  calcExample = () => {
    debugger
    console.log(this);
  }
}

jonas.calcAge(); // 48

matilda.calcAge = jonas.calcAge;

matilda.calcAge(); // 20

// 2. Simple function call
// 2.1 Simple function call => this = <undefined> (Using strict mode)

function call1() {
  'use strict' ;
  console.log(this); // undefined
}

call1();

const call1a = function() {
  'use strict' ;
  console.log(this); // undefined
}

call1a();

// 2.2 Simple function call => this = <window> (Not using strict mode)

function call2() {
  console.log(this); // window
}

call2();

const call2a = function() {
  console.log(this); // window
}

call2a();

// 3. Call arrow function

call3 = () => console.log(this);
call3(); // window

const test = {
  name: 'Name',
  call4: () => {
    console.log('call4', this);
  }
}
test.call4(); // window

// 4. Call event listener

const divElement = document.getElementById('div1');
divElement.addEventListener('click', action);

function action() {
  console.log(this);

  // <div id="div1" style="width: 200px; height: 200px;">
  // </div>
}
