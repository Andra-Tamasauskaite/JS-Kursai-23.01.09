document.write(
  `<style> body {color:white; text-align: center;
    padding: 20px; margin-top: 60px; font-size: 30px; }</style>`
);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
////////////////////////////////////////////
document.write("2023-02-10<br>Užduotis - masyvai<br><br>");
////////////////////////////////////////////
//Task 1
//1. Sugeneruokite masyvą iš 30 elementų (indeksai nuo 0 iki 29), kurių reikšmės yra atsitiktiniai skaičiai nuo 5 iki 25.

let masyvas = [];
let index = 29;
for (let i = 0; i < index; i++) {
  masyvas.push(rand(5, 25));
}
document.write(`1. Array's numbers: ${masyvas}. <br><br>`);

//2. Naudodamiesi 1 uždavinio masyvu:
//a) Suskaičiuokite kiek masyve yra reikšmių didesnių už 10;
const myElements = masyvas.filter((elements) => elements > 10);
let count = myElements.length;
document.write(
  `<div> 2. a) There are ${count} numbers that are bigger than 10.</div>`
);
//source:https://stackoverflow.com/questions/38618088/how-to-find-multiple-elements-in-array-javascript-es6

////////////////////////////////////
//b) Raskite didžiausią masyvo reikšmę ir jos indeksą arba indeksus jeigu yra keli;
const largestNum = masyvas.reduce((a, b) => Math.max(a, b), -Infinity);
document.write(
  `<div> 2. b) Biggest number in the array is ${largestNum}.</div>`
);
//source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max

////////////////////////////////////
//c) Suskaičiuokite visų porinių (lyginių) indeksų reikšmių sumą;
const evenNums = masyvas.filter((num) => num % 2 === 0);
const evenNumsSum = evenNums.reduce((a, b) => {
  return a + b;
}, 10);
document.write(`<div> 2. c) Even numbers sum is ${evenNumsSum}.</div>`);

//source: 1) https://codingbeautydev.com/blog/javascript-find-even-numbers-in-array/#:~:text=Array%20filter()%20Method&text=log(evens)%3B,numbers%20in%20the%20original%20array.
//2) https://reqbin.com/code/javascript/m81eb1ms/javascript-sum-array-example?utm_content=cmp-true

////////////////////////////////////
//d) Sukurkite naują masyvą, kurio reikšmės yra 1 uždavinio masyvo reikšmes minus tos reikšmės indeksas;

//Paskaita - for ...of; for ..in; tik masyvam ir objektam.
// for of ciklas grazina kiekviena elemento reiksme;
// for in ciklas grazina indexa;
