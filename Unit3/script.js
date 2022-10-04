// console.log("Hello world");

// Create a firstName variable. Set it to your first name.
// string data type
const firstName = "Andrea";
console.log(firstName[4]);
// Create a lastName variable. Set it to your last name.
let lastName = "H";
// Create a fullName variable. Set it by concatenating firstName and lastName with a space between. (Or use a template literal.) (Don't know what concatenate means? Google "JavaScript concatenate.")

// concatenate two strings:
let fullName = firstName + " " + lastName;
console.log(fullName);

// template literal:
let fullName2 = `${firstName} ${1 + 1} is my full name. 1 + 1`;
// Log the fullName variable to the console.
console.log(fullName2);

// Create a population variable. Set it to the population of Detroit or your favorite city.
let populationOfDetroit = 672351;

// Log population to the console.
console.log(populationOfDetroit);

// Multiply the population by 3 and log that to the console.
console.log(populationOfDetroit * 3);

// Create a javaScriptIsCool variable. Set it to the boolean value true.
const javaScriptIsCool = true;
console.log(javaScriptIsCool);

// Create a colors variable. Set it to an array of the colors of the rainbow. (Each color is a string.)
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// square bracket notation
// access a specific index of an array or strings
// index starts at 0
colors[0]; // "red"
colors[1]; // "orange"
console.log(colors[1]);

for (let index = 0; index <= 6; index++) {
  console.log(colors[index]);
}

// .length for length of arrays or strings
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Write a for loop that counts from 1 to 5 and logs each number to the console.
for (let zebra = 1; zebra <= 5; zebra++) {
  console.log(zebra);
}

let someNumber = 9;
// reassignment (update variable):
someNumber = someNumber + 3;
// shorthand
someNumber += 3;

// inc by 1
someNumber = someNumber + 1;
// shorthand
someNumber += 1;
// shorthand*2 (only works with 1)
someNumber++;

// dec by 1
someNumber = someNumber - 1;
// shorthand
someNumber -= 1;
// shorthand*2 (only works with 1)
someNumber--;

//object denoted with curly braces
const objectOne = {
  // key / value pairs (also called properties)
  keyOne: "value 1",
  keyTwo: 2,
  keyThree: false,
};

const joshesBook = {
  title: "Oath Briger",
  author: "Brandon Sanderson",
  year: 2015,
  pages: 1200,
  checkedOut: true,
};

// access properties of objects with dot notation
joshesBook.author; // "Brandon Sanderson"
// square bracket notation
joshesBook["author"];
// update property
joshesBook.title = "Rythm of War";

joshesBook.pages = joshesBook.pages + 100;
//shorthand
joshesBook.pages += 100;
console.log(joshesBook);
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

while (true) {
  // something
  break;
}

// Write a for loop that counts from 0 to 4 and logs each number to the console.
for (let josh = 0; josh <= 4; josh++) {
  console.log(josh);
}

//conditionals:
let isItRaingInside = true;
if (isItRaingInside === true) {
  console.log("Call the office");
} else {
  console.log("Relax");
}

let didJoshFinishHisBook = false;

//shorthand for checking a boolean to be true / truthy
if (didJoshFinishHisBook) {
  joshesBook.title = "Rhythem of War";
} else if (!didJoshFinishHisBook) {
  //shorthand for false / flasy
  console.log("Keep Reading");
}

let myAge = 31;
let canVote;
if (myAge <= 18) {
  canVote = false;
} else {
  canVote = true;
}
//ternary
let canVote2 = myAge >= 18 ? true : false;
