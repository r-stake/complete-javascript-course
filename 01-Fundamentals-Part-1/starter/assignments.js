
// console.log("--------- Values and Variables ----------");
// let country = "Lithuania";
// let continent = "Europe";
// let population = 2.87;

// console.log(country);
// console.log(continent);
// console.log(population);


// console.log("-------- Data Types ------------");
// let isIsland = false;
// let language;

// console.log(typeof isIsland, isIsland);
// console.log(typeof population, population);
// console.log(typeof country, country);
// console.log(typeof language, language);



// console.log("------- let, const and var -------");
// language = "Lithuanian";
// // const country = "Lithuania";
// // const continent = "Europe";
// // const isIsland = false;
// // isIsland = true;


// console.log("------ Basic Operators --------");

// let halfCountry = population / 2;
// console.log(halfCountry);

// // population++;
// console.log(population);
// console.log(population > 6);
// console.log(population > 33);

// const description =
//   country +
//   " is in " +
//   continent +
//   ", and it's " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// console.log("------ Strings and Template Literals -------");

// const newDescription = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
// console.log(newDescription);

// console.log("------- Taking Decisions: if / else Statements");

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(`${country}'s population os ${33 - population} million below average`);
// }

// console.log("------ Type Conversion and Coercion ------");

// console.log("9" - "5");
// console.log("19" - "13" + "17");
// console.log("19" - "13" + 17);
// console.log("123" < 57);
// console.log(5 + 6 + "4" + 9 - 4 - 2);

// console.log("-------- Equality Operators: == vs. === ----------");

// // const numNeighbors = Number(prompt("How many neighbor countries does your country have?"));

// // if (numNeighbors === 1) {
// //   console.log("Only one border!");
// // } else if (numNeighbors > 1) {
// //   console.log("More than 1 border");
// // } else {
// //   console.log("No borders");
// // }

// console.log("------- Logical Operators --------");

// if (population < 50 && language === "English" && !isIsland) {
//   console.log(`You should live in ${country}`);
// } else {
//   console.log(`${country} does not meet your criteria`);
// }

// console.log("-------- The switch Statement ---------");

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("Greatest number of native speakers!");
//     break;

//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;

//   case "english":
//     console.log("3rd place");
//     break;

//   case "hindi":
//     console.log("Number 4");
//     break;

//   case "arabic":
//     console.log("5th most spoken language");
//     break;

//   default:
//     console.log("Great language too");
// }

// console.log("-------- The Conditional (Ternary) Operator ---------");

// console.log(
//   `${country}'s population is ${population > 33 ? "above" : "below"} average`
// );