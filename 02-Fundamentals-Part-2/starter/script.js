"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive");
}

// const interface = "Audio";
// const private = 534;
*/

/*
function logger() {
  console.log("My name is Merry Brandybuck");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
// Function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1990);
console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1990, "Frodo"));
console.log(yearsUntilRetirement(1985, "Gandalf"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3)); 
*/

/*
const calcAge = function (birthYear) {
  return 2024 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1990, "Frodo"));
console.log(yearsUntilRetirement(1950, "Bilbo"));
*/

/*
const friend1 = "Frodo";
const friend2 = "Bilbo";
const friend3 = "Gandalf";

const friends = ["Frodo", "Bilbo", "Gandalf"];
console.log(friends);

const years = new Array(1990, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Aragorn";
console.log(friends);
// friends = ["Merry", "Pippin"];

const firstName = "Gimli";
const dwarf = [firstName, "of Glóin", 3141 - 2879, "Lord", friends];
console.log(dwarf);
console.log(dwarf.length);

// Exercise
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const yearsArr = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge1(yearsArr[0]);
const age2 = calcAge1(yearsArr[1]);
const age3 = calcAge1(yearsArr[yearsArr.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge1(yearsArr[0]), calcAge1(yearsArr[1]), calcAge1(yearsArr[yearsArr.length - 1])];
console.log(ages);
*/

/*
// Add elements
const friends = ["Frodo", "Bilbo", "Gandalf"];
const newLength = friends.push("Legolas");
console.log(friends);
console.log(newLength);

friends.unshift("Aragorn");
console.log(friends);

// Remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf("Bilbo"));
console.log(friends.indexOf("Smeagol"));

console.log(friends.includes("Bilbo"));
console.log(friends.includes("Smeagol"));

if (friends.includes("Gandalf")) {
  console.log("You have a friend called Gandalf");
}
*/

/*
const bilbo = {
  firstName: "Bilbo",
  lastName: "Baggins",
  age: 2024 - 1991,
  job: "burglar",
  friends: ["Frodo", "Gandalf", "Elrond"]
};

console.log(bilbo);

console.log(bilbo.lastName);
console.log(bilbo["lastName"]);

const nameKey = "Name";
console.log(bilbo["first" + nameKey]);
console.log(bilbo["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Bilbo? Choose between firstName, lastName, age, job and friends");

bilbo.location = "The Shire";
bilbo["twitter"] = "@bilboBaggins";

if (bilbo[interestedIn]) {
  console.log(bilbo[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstName, lastName, age, job and friends");
}


console.log(bilbo);

// Challenge
console.log(`${bilbo.firstName} has ${bilbo.friends.length} friends, and his best friend is called ${bilbo.friends[0]}`);
*/

/*
/////////////////////////////////////////////////////////////
console.log("-------- Object Methods ------");
/////////////////////////////////////////////////////////////
const bilbo = {
  firstName: "Bilbo",
  lastName: "Baggins",
  birthYear: 1965,
  job: "burglar",
  friends: ["Frodo", "Gandalf", "Elrond"],
  hasTheRing: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2024 - this.birthYear;
  // }

  calcAge: function () {
    // console.log(this);
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasTheRing === true ? "the" : "no"} ring.`
  }

};

console.log(bilbo.calcAge());
// console.log(bilbo["calcAge"]());

console.log(bilbo.age);

// Challenge
console.log(bilbo.getSummary());
*/

/*
/////////////////////////////////////////////////////////////
console.log("----- Looping Backwards and Loops in Loops ----");
/////////////////////////////////////////////////////////////
const bilbo = [
  "Bilbo",
  "Baggins",
  2024 - 1965,
  "burglar",
  ["Frodo", "Gandalf", "Elrond"]
];

for (let i = bilbo.length - 1; i >= 0; i--) {
  console.log(bilbo[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep}`);
  }
}
*/

/*
/////////////////////////////////////////////////////////////
console.log("----- The while Loop ----");
/////////////////////////////////////////////////////////////
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let counter = 1;
while (counter <= 10) {
  console.log(`WHILE: Lifting weights repetition ${counter}`);
  counter++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`You rolled a ${dice}`);
  }
}
*/

