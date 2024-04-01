"use strict";

/*
function calcAge(birthYear) {
  const age = 2024 - birthYear;

  function printAge() {
    let output = `${firstName} you are the ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millennial = true;
      // Creating new variable with the same name as outer scope's variable
      const firstName = "Bilbo";

      // Reassigning outer scope's variable
      const output = "NEW OUTPUT";

      const string = `Oh, and you're a millennial, ${firstName}`;
      console.log(string);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(string);
    console.log(millennial);
    // console.log(add(2, 3));
    console.log(output);
  }

  printAge();

  return age;
}

const firstName = "Aragorn";
calcAge(1990);
// console.log(age);
// printAge();
*/

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Frodo";
let job = "Ring-bearer";
const year = 1954;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(1, 2));
console.log(addArrow);
// console.log(addArrow(4, 5));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) deleteShoppingCar();

var numProducts = 10;

function deleteShoppingCar() {
  console.log("All products deleted!");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(2024 - birthYear);
  console.log(this);
};

calcAgeArrow(1990);

const bilbo = {
  year: 1937,
  calcAge: function () {
    console.log(this);
    console.log(2024 - this.year);
  },
};

bilbo.calcAge();

const frodo = {
  year: 1954,
};

frodo.calcAge = bilbo.calcAge;
frodo.calcAge(1990);

const f = bilbo.calcAge;
console.log(f);
f(1995);
*/

/*
var firstName = "Aragorn";

const bilbo = {
  firstName: "Bilbo",
  year: 1937,
  calcAge: function () {
    // console.log(this);
    console.log(2024 - this.year);

    // // Older solution, pre ES6
    // const self = this; // variable can be called self or that
    // const isMillennial = function (sef) {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // this = undefined
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Modern solution, ES6. Use an arrow function, since it does not get it's own this keyword and instead uses one from the parent scope
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillennial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

bilbo.greet();
bilbo.calcAge(1990);

// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12, 17);
addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Gimli",
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(friend);
console.log(me);
*/

/*
// Primitive types
let lastName = "Baggins";
let oldLastName = lastName;
lastName = "Took";
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log(jessica2);
console.log(jessicaCopy);

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log(jessica2);
console.log(jessicaCopy);
*/
