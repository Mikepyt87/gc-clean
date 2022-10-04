"use strict";
// 1. (PRIMITIVE DATA TYPES)

// Declare and initialize the following variables:

//firstName - string
let firstName = "Jessica";
//lastName - string
let lastName = "Trela";
//favoriteAnimal - string
const favoriteAnimal = "Cheetah";
//nickName - null
const nickName = null;
//excitementLevel - number
let excitementLevel = 5;
//isHungry - boolean
let isHungry = true;
//console.log your partner’s first name.
console.log(firstName);
//console.log your partner’s last name.
console.log(lastName);
//console.log your partner’s full name using a template literal.
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
//same thing
console.log(`${firstName} ${lastName}`);
// 2. (REFERENCE DATA TYPE: OBJECTS)

// make an object named “me” and give values to the following properties: firstName, lastName, favoriteAnimal, nickName, excitementLevel, and isHungry
const me = {
  firstName: "Michael",
  lastName: "Pytlowany",
  favoriteAnimal: "House cat",
  nickName: "Mike",
  excitementLevel: 9,
  isHungry: true,
};
// console.log “me”
console.log(me);
// increment excitementLevel on “me”
me.excitementLevel++;
// console.log “me” again. Do you see that excitement incremented?
console.log(me);

// 3. (REFERENCE DATA TYPE: ARRAYS)

// create an array of names
let myFamily = ["Lana", "Thomas", "Nugget", "Sophia", "Josh"];
// create an array of people (objects that follow the format of the previous object exercise)
const students = [
  {
    firstName: "Jacob",
    lastName: "Beffrey",
    favoriteAnimal: "Cat",
    nickName: "Jake",
    excitementLevel: 4,
    isHungry: false,
  },
  {
    firstName: "Brendan",
    lastName: "Chico",
    favoriteAnimal: "Copybara",
    nickName: "Chico",
    excitementLevel: 8,
    isHungry: false,
  },
  {
    firstName: "Joshua",
    lastName: "DeHaan",
    favoriteAnimal: "Penguin",
    nickName: "Josh",
    excitementLevel: 4,
    isHungry: false,
  },
];
// console.log the second name in the array of names.
console.log(students[1].firstName);
// change the name of the first person in the array of names.
students[0].firstName = "Jake";
// console.log the second object in the array of people
console.log(students[1]);
// console.log only the second object's firstName value in the array of people.
console.log(students[1].firstName);
// change the second object's firstName value.
students[1].firstName = "George";

// access elements of array [index]
// access properties of obj // object.property // object["property"]

// 4. (Control Structure: Conditionals)

//console.log "My name is <firstName> and I am hungry" if isHungry is true.
console.log("My name is " + me.firstName + " and I am hungry");
//console.log "My name is <firstName> and I am not hungry" if isHungry is false.

//if you are hungry, set your nickName to be something like: <firstName> the hungry <favoriteAnimal>
//if you are not hungry, set your nickName to be something like: <firstName> the satisfied <favoriteAnimal>
//console.log nickName
console.log((me.nickName = me.firstName + " the Hungry " + me.favoriteAnimal));
//console.log "I'm not excited" if excitement level is less than 4
//console.log "I'm moderately excited" if excitement level is greater than or equal to 4 and excitement level is less than or equal to 7
//console.log "I'm excited" if excitement level is greater than 7
if (me.excitementLevel >= 7) {
  console.log("I'm excited!");
}

// 5. (Control Structure: Loops)

//console.log every object in the array
for (let student of students) {
  console.log(student);
}
console.log(students);

//console.log every first name in the array
for (let i of students) {
  console.log(i.firstName);
}

//console.log the object that represents the person with the longest name
// superlative (deck of cards)
// initialize longest to "first in card deck"
let currentLongestName = students[0].firstName;
console.log(currentLongestName);
for (const currentCard of students) {
  if (currentCard.firstName.length > currentLongestName) {
    currentLongestName = currentCard.firstName;
  }
}
console.log(currentLongestName);
//find the average excitement level
//console.log the average excitement level
