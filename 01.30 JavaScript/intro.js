// Task 1
let actName = "Jennifer";
let actLast = "Aniston";

if (actName.length > actLast.length) {
  console.log(actLast);
} else {
  console.log(actName);
}

// Task 2
const firstName = "Andra";
const lastName = " Tamašauskaitė";
const birthYear = 2000;
const ageYear = 2022;

const result = `Aš esu ${firstName + lastName}. Man yra ${
  ageYear - birthYear
} metai.`;

console.log(result);

//Task 3
let nameA = "Harry";
let nameB = "Potter";
let combN = nameA.slice(2, 5) + nameB.slice(3, 6);

console.log(combN);

//Task 4
let sentence = "Once upon a time in hollywood";
let results = sentence.replace(/o/gi, "*");

console.log(results);

//Task 5
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let random1 = rand(0, 2);
let random2 = rand(0, 2);
let random3 = rand(0, 2);
let random4 = rand(0, 2);

console.log(random1, random2, random3, random4);
