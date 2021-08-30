//Write your own code here
//DON'T touch any other files!

// 1. remove all break tags
const brs = document.querySelectorAll("br");
brs.forEach(removeBR);

function removeBR(elem) {
  elem.remove();
}

// 2. Give all sections the class 'filled'
const filled = document.querySelectorAll("section");
filled.forEach(addClass);

function addClass(filled) {
  filled.classList.add("filled");
  filled.previousElementSibling.remove();
}

// function giveClass() {
//   filled.setClass("class", "filled");
// }

// console.log(filled);

// 3. Remove all elements that come before a section

// Exercise
let name = "";
if (name) {
  console.log("it is true");
}

let age;
if (age) {
  console.log(age);
}

let items = ["beer", "cabbage"];
if (items.length) {
  console.log(items);
}

if (hobby) {
  console.log(hobby);
}

let drinksLeft = 0;
if (drinksLeft) {
  console.log(drinksLeft);
}

let balance = -10000;
if (balance) {
  console.log(balance);
}

let shouldSleep = true;
if (!shouldSleep) {
  console.log(shouldSleep);
}

let sleepy = "false";
if (sleepy) {
  console.log(sleepy);
}
