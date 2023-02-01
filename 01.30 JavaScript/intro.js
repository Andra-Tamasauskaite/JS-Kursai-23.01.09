// Task 1
let actName = "Jennifer";
let actLast = "Aniston";

if (actName.length > actLast.length) {
  console.log(`Trumpesnis kintamasis yra pavardė - ${actLast}.`);
} else if (actName.length === actLast.length) {
  console.log("Abu kintamieji yra vienodo ilgio.");
} else {
  console.log(`Trumpesnis kintamasis yra vardas - ${actName}.`);
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
//let combN = nameA.slice(2, 5) + nameB.slice(3, 6);
let combN =
  nameA[nameA.length - 3] +
  nameA[nameA.length - 2] +
  nameA[nameA.length - 1] +
  nameB[nameB.length - 3] +
  nameB[nameB.length - 2] +
  nameB[nameB.length - 1];
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

let nuliai = 0;
let vienetai = 0;
let dvejatai = 0;

if (random1 === 0) {
  nuliai++;
}
if (random2 === 0) {
  nuliai++;
}
if (random3 === 0) {
  nuliai++;
}
if (random4 === 0) {
  nuliai++;
}

if (random1 === 1) {
  vienetai++;
}
if (random2 === 1) {
  vienetai++;
}
if (random3 === 1) {
  vienetai++;
}
if (random4 === 1) {
  vienetai++;
}

if (random1 === 2) {
  dvejatai++;
}
if (random2 === 2) {
  dvejatai++;
}
if (random3 === 2) {
  dvejatai++;
}
if (random4 === 2) {
  dvejatai++;
}

console.log(
  `Nulių yra: ${nuliai}, vienetų yra: ${vienetai}, dvejatų yra: ${dvejatai}.`
);
