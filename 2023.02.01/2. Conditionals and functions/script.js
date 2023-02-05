function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Task 1
let randomNumber1 = rand(0, 4);
let randomNumber2 = rand(0, 4);

console.log(randomNumber1, randomNumber2);

if (randomNumber1 === 0 && randomNumber2 === 0) {
  console.log(
    `The answer is infinity, because a number (${randomNumber2}) is being dived by another number which is ${randomNumber1}.`
  );
} else if (randomNumber1 >= randomNumber2) {
  const result = randomNumber1 / randomNumber2;
  console.log(result.toFixed(2));
  {
    if (randomNumber2 === 0) {
      console.log(
        "Division cannot be done because a number cannot be devided by 0."
      );
    }
  }
} else if (randomNumber2 >= randomNumber1) {
  const result = randomNumber2 / randomNumber1;
  console.log(result.toFixed(2));
  {
    if (randomNumber1 === 0) {
      console.log(
        "Division cannot be done because a number cannot be devided by 0."
      );
    }
  }
}

//Task 2

let apples = rand(0, 25);
let oranges = rand(0, 25);
let peaches = rand(0, 25);
console.log(apples, oranges, peaches);

if (apples > oranges && oranges > peaches) {
  console.log(`Middle value: oranges ${oranges}`);
} else if (apples > peaches && peaches > oranges) {
  console.log(`Middle value:  peaches ${peaches}`);
} else if (oranges > apples && apples > peaches) {
  console.log(`Middle value:  apples ${apples}`);
} else if (oranges > peaches && peaches > apples) {
  console.log(`Middle value:  peaches ${peaches}`);
} else if (peaches > apples && apples > oranges) {
  console.log(`Middle value:  apples ${apples}`);
} else if (peaches > oranges && oranges > apples) {
  console.log(`Middle value: oranges ${oranges}`);
} else if (apples == oranges && oranges == peaches) {
  console.log(`Middle value: all have the same value which is ${oranges}.`);
} else if (apples == oranges) {
  console.log(`Middle value: oranges and apples which is ${oranges}.`);
} else if (apples == peaches) {
  console.log(`Middle value: peaches and apples which is ${peaches}.`);
} else if (peaches == oranges) {
  console.log(`Middle value: oranges and peaches which is ${oranges}.`);
}

//2 Sprendimas
let pirmas_skaicius = rand(0, 25);
let antras_skaicius = rand(0, 25);
let trecias_skaicius = rand(0, 25);

let maziausias = Math.min(pirmas_skaicius, antras_skaicius, trecias_skaicius);
let didziausias = Math.max(pirmas_skaicius, antras_skaicius, trecias_skaicius);

console.log(pirmas_skaicius, antras_skaicius, trecias_skaicius);
console.log(`Mažiausi skaičiai:`, maziausias);
console.log(`Didžiausi skaičiai:`, didziausias);

let suma = pirmas_skaicius + antras_skaicius + trecias_skaicius;
let vidurinis = suma - (maziausias + didziausias);

console.log(`Vidurinis:`, vidurinis);

//Task 3
let firstName = "Lara";
let lastName = "Croft";

const combined = firstName[0] + lastName[0];

console.log(combined.toLowerCase());

//Task 4
let letterL = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// let randomLetter = letterL[Math.floor(Math.random() * letterL.length)];
// console.log(randomLetter);

let random = letterL.sort(() => 0.5 - Math.random()).slice(0, 3);

console.log(random.toString());

//4 sprendimas
let raides = "abcdefghijklmnopqrstuvwxyz";
let kodas =
  raides[rand(0, raides.length - 1)] +
  raides[rand(0, raides.length - 1)] +
  raides[rand(0, raides.length - 1)];
console.log(kodas);
