function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//task 3
let aLetter = 0;
let bLetter = 0;
let cLetter = 0;
let dLetter = 0;

let letters = [];
for (let i = 0; i < 50; i++) {
  letters.push("A", "B", "C", "D");
  if (letters.filter((element) => element === "A")) {
    aLetter++;
  }
  if (letters.filter((element) => element === "B")) {
    bLetter++;
  }
  if (letters.filter((element) => element === "C")) {
    cLetter++;
  }
  if (letters.filter((element) => element === "D")) {
    dLetter++;
  }
}
let randomLetters = letters.sort(function () {
  return Math.random() - 0.5;
});
document.getElementById("task-3").innerHTML = letters;
document.getElementById(
  "taks-3-second"
).innerHTML = `There are ${aLetter} of A's, ${bLetter} of B's, ${cLetter} of C's and ${dLetter} of D's. In total: ${letters.length} letters.`;

//3 uzd sprendimas
let masyvas = [];
let raides = "ABCD";
let raidziuKiekiai = {
  a: 0,
  b: 0,
  c: 0,
  d: 0,
};
for (let i = 0; i < 200; i++) {
  let raide = raides[rand(0, raides.length - 1)];
  masyvas.push(raide);

  if (raide === "A") raidziuKiekiai.a++;

  if (raide === "B") raidziuKiekiai.b++;

  if (raide === "C") raidziuKiekiai.c++;

  if (raide === "D") raidziuKiekiai.d++;
}
console.log(masyvas);
console.log(raidziuKiekiai);

//task 4
const newArrLetters = letters.slice();
newArrLetters.sort();
document.getElementById(
  "task-4"
).innerHTML = `New array created from an old one, values put aphabetically: ${newArrLetters}`;

//4 uzd sprendimas
console.log(masyvas.sort());

//task 5
const array_1 = [];
const array_2 = [];
const array_3 = [];

for (let i = 0; i < 50; i++) {
  array_1.push("A", "B", "C", "D");
  array_2.push("A", "B", "C", "D");
  array_3.push("A", "B", "C", "D");
}
let ar1 = array_1.sort(function () {
  return Math.random() - 0.5;
});

let ar2 = array_2.sort(function () {
  return Math.random() - 0.5;
});

let ar3 = array_3.sort(function () {
  return Math.random() - 0.5;
});

const combinedArr = [];
for (let i = 0; i < array_1.length; i++) {
  combinedArr.push(array_1[i] + array_2[i] + array_3[i]);
}
// console.log(combinedArr);

//5 uzd sprendimas
let masyvai = {
  pirmasis: [],
  antrasis: [],
  treciasis: [],
};

for (let i = 0; i < 200; i++) {
  masyvai.pirmasis.push(raides[rand(0, raides.length - 1)]);
  masyvai.antrasis.push(raides[rand(0, raides.length - 1)]);
  masyvai.treciasis.push(raides[rand(0, raides.length - 1)]);
}
console.log(`Pirmas: ${masyvai.pirmasis}`);
console.log(`Antras: ${masyvai.antrasis}`);
console.log(`Treciasis: ${masyvai.treciasis}`);

masyvas = [];
for (let i in masyvai.pirmasis) {
  masyvas.push(
    masyvai.pirmasis[i] + masyvai.antrasis[i] + masyvai.treciasis[i]
  );
}
// console.log(masyvas);
let counter = 0;
let laikinas = [];
for (let combo of masyvas) {
  if (combo != "AAA" && combo != "BBB" && combo != "CCC" && combo != "DDD")
    counter++;

  if (!laikinas.includes(combo)) laikinas.push(combo);
}
console.log(`Nesikartojančių reikšmių: ${counter}.`);
console.log(`Unikalių kombinacijų yra: ${laikinas.length}.`);

//task 6
const arrVal1 = [];
const arrVal2 = [];

for (let i = 0; i < 100; i++) {
  arrVal1.push(rand(100, 999));
  arrVal2.push(rand(100, 999));
}
// console.log(arrVal1, arrVal2);

// for(let value of arrVal1){
//     if(arrVal1.indexOf(value) === -1){
//         arrVal1.
//     }
// }

//6 uzd sprendimas
masyvai = {
  pirmasis: [],
  antrasis: [],
};

while (masyvai.pirmasis.length < 100) {
  let pirmas = rand(100, 999);
  if (!masyvai.pirmasis.includes(pirmas)) masyvai.pirmasis.push(pirmas);
}

while (masyvai.antrasis.length < 100) {
  let antras = rand(100, 999);
  if (!masyvai.antrasis.includes(antras)) masyvai.antrasis.push(antras);
}

console.log(`Generated arrays:`);
console.log(masyvai.pirmasis);
console.log(masyvai.antrasis);

//task 7
masyvas.trecias = [];

for (let reiksme of masyvai.pirmasis) {
  if (!masyvai.antrasis.includes(reiksme)) masyvas.trecias.push(reiksme);
}
console.log(masyvas.trecias);

//task 8
masyvai.ketvirtas = [];

for (let reiksme of masyvai.pirmasis) {
  if (masyvai.antrasis.includes(reiksme)) masyvai.ketvirtas.push(reiksme);
}
console.log(masyvai.ketvirtas);

//task 9
masyvai.penktas = [];
for (let i in masyvai.pirmasis) {
  masyvai.penktas[masyvai.pirmasis[i]] = masyvai.antrasis[i];
}
console.log(masyvai.penktas);

//task 10
masyvas = [rand(5, 25), rand(5, 25)];
for (let i = 2; i < 10; i++) {
  masyvas[masyvas.length] = masyvas[i - 2] + masyvas[i - 1];
}
console.log(masyvas);
