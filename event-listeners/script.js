const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener('click', (e) => {
  console.log('GrandParent Capture');
}, { capture: true });

grandParent.addEventListener('click', (e) => {
  console.log('GrandParent Bubble');
});

parent.addEventListener('click', (e) => {
  console.log('Parent Capture');
}, { capture: true });

parent.addEventListener('click', (e) => {
  console.log('Parent Bubble');
});

child.addEventListener('click', (e) => {
  console.log('Child Capture');
}, { capture: true });

child.addEventListener('click', (e) => {
  console.log('Child Bubble');
});

document.addEventListener('click', (e) => {
  console.log('Document Capture');
}, { capture: true });

document.addEventListener('click', (e) => {
  console.log('Document Bubble');
});

// Execute only one time
const element = document.getElementById('element');
element.addEventListener('click', e => {
  // Do something...
}, { once: true });

// Remove event 
const element = document.getElementById('element');
element.addEventListener('click', doSomething);

element.removeEventListener('click', doSomething);

function doSomething() {
  // Do something...
};

// Stop propagation
const element = document.getElementById('element');
element.addEventListener('click', e => {
  e.stopPropagation();
});

// Event delegation
const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', e => {
  console.log('Event');
});

function addGlobalEventListener(type, selector, callback) {
  document.addEventListener(type, e => {
    if (e.target.matches(selector)) {
      callback(e);
    }
  });
}

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';
document.body.append(newDiv);
