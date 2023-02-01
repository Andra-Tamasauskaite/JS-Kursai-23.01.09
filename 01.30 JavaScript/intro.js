// Task 1
let actName = "Jennifer";
let actLast = " Aninston";

console.log(actName + actLast);

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
