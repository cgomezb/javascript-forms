// append vs appendChild
// append => support (strings, html element) Multiparamater
// appendChild => support (html element) One parameter

const body = document.body;
const div = document.createElement('div');
const strong = document.createElement('strong');
strong.innerHTML = 'Hello World';
div.append(strong);
body.append(div); 

// get, set, remove attributes

const myDiv = document.querySelector('#myDiv');
const spanHello = document.querySelector('#hello');
const spanBye = document.querySelector('#bye');

console.log(spanHello.getAttribute('id'));
console.log(spanHello.getAttribute('title'));
// spanHello.id;
// spanHello.title;

console.log(spanHello.setAttribute('id', 'newId'));
console.log(spanHello.setAttribute('title', "new title"));
// spanHello.id = 'newId';
// spanHello.title = 'new title';

spanHello.removeAttribute('id');
spanHello.removeAttribute('title');

// dataset (attribute data-{variable}="value")

console.log(spanHello.dataset.test);  // This is a data test
spanHello.dataset.test = 'new value';

// add and remove classes

spanHello.classList.add('newClass');
spanHello.classList.remove('newClass');
spanHello.classList.toggle('toggle');
spanHello.classList.toggle('toggle', true);

// style (element.style.{property})

spanHello.style.color = 'Green';
