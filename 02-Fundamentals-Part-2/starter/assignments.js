// console.log("---------- Functions ------------");

// function describeCountry(country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// }

// const japan = describeCountry("Japan", 125.7, "Tokyo");
// const newZealand = describeCountry("New Zealand", 5.1, "Wellington");
// const norway = describeCountry("Norway", 5.4, "Oslo");

// console.log(japan);
// console.log(newZealand);
// console.log(norway);

// console.log("------ Function Declarations vs. Expressions -------");

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }

// const percJapan1 = percentageOfWorld1(125.7);
// const percNewZealand1 = percentageOfWorld1(5.1);
// const percNorway1 = percentageOfWorld1(5.4);

// console.log(percJapan1);
// console.log(percNewZealand1);
// console.log(percNorway1);

// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// }

// const percJapan2 = percentageOfWorld2(125.7);
// const percNewZealand2 = percentageOfWorld2(5.1);
// const percNorway2 = percentageOfWorld2(5.4);

// console.log(percJapan2);
// console.log(percNewZealand2);
// console.log(percNorway2);

// console.log("------ Arrow functions --------");

// const percentageOfWorld3 = population => (population / 7900) * 100;

// const percJapan3 = percentageOfWorld3(125.7);
// const percNewZealand3 = percentageOfWorld3(5.1);
// const percNorway3 = percentageOfWorld3(5.4);

// console.log(percJapan3);
// console.log(percNewZealand3);
// console.log(percNorway3);

// console.log("------- Functions Calling Other Functions -------");

// function describePopulation(country, population) {
//   const populationPercentage = percentageOfWorld1(population).toFixed(2);
//   return `${country} has ${population} million, people, which is about ${populationPercentage}% of the world`
// }

// console.log(describePopulation("Japan", 125.7));
// console.log(describePopulation("New Zealand", 5.1));
// console.log(describePopulation("Norway", 5.4));

// console.log("------ Introduction to Arrays -------");

// const populations = [125.7, 5.1, 5.4, 7.8];

// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]).toFixed(2),
//   percentageOfWorld1(populations[1]).toFixed(2),
//   percentageOfWorld1(populations[2]).toFixed(2),
//   percentageOfWorld1(populations[3]).toFixed(2)
// ];
// console.log(percentages);

// console.log("-------- Basic Array Operations (Methods) ---------");

// const neighbors = ["Denmark", "Netherlands", "Belgium"];
// console.log(neighbors);

// neighbors.push("Utopia");
// console.log(neighbors);

// neighbors.pop("Utopia");
// console.log(neighbors);

// if (!neighbors.includes("Germany")) {
//   console.log("Probably not a central european country");
// }

// const index = neighbors.indexOf("Netherlands");
// neighbors[index] = "Kingdom of Netherlands";
// console.log(neighbors);

// console.log("------- Introduction to Objects ----------");

// const myCountry = {
//   country: "New Zealand",
//   capital: "Wellington",
//   language: ["Māori", "English", "New Zealand Sign Language"],
//   population: 5.1,
//   neighbors: [],

//   describe: function () {
//     return `${this.country} has ${this.population} million ${this.language[0]}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
//   },

//   checkIsIsland: function () {
//     this.isIsland = this.neighbors.length === 0 ? true : false;
//     return this.isIsland;
//   }
// }

// console.log(myCountry);

// console.log("-------- Dot vs. Bracket Notation ---------");

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language[0]}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

// myCountry.population += 2;
// console.log(myCountry.population);

// myCountry["population"] -= 2;
// console.log(myCountry.population);

// console.log("-------- Object Methods --------");

// // Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.

// console.log(myCountry.describe());
// console.log(myCountry.checkIsIsland());
// console.log(myCountry.isIsland);

// /////////////////////////////////////////////////////////////
// console.log("-------- Iteration: The for Loop --------");
// /////////////////////////////////////////////////////////////
// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// /////////////////////////////////////////////////////////////
// console.log("-------- Looping Arrays, Breaking and Continuing --------");
// /////////////////////////////////////////////////////////////
// const percentages2 = [];
// for (let i = 0; i < populations.length; i++) {
//   percentages2.push(percentageOfWorld1(populations[i]).toFixed(2));
// }

// console.log(percentages2);

// /////////////////////////////////////////////////////////////
// console.log("----- Looping Backwards and Loops in Loops ----");
// /////////////////////////////////////////////////////////////
// const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden']];

// for (let i = 0; i < listOfNeighbors.length; i++) {
//   for (let j = 0; j < listOfNeighbors[i].length; j++) {
//     console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
//   }
// }

// /////////////////////////////////////////////////////////////
// console.log("----- The while Loop ------");
// /////////////////////////////////////////////////////////////
// const percentages3 = [];

// let counter = 0;
// while (counter < populations.length) {
//   percentages3.push(percentageOfWorld1(populations[counter]).toFixed(2));
//   counter++;
// }

// console.log(percentages3);