document.write(
  `<style> body {color:white; text-align: center;
    padding: 20px;} .sq {line-height: 10px; font-size: 30px}</style>`
);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
////////////////////////////////////////////
////////////////////////////////////////////
//Task 1
document.write("1.First task <br><br>");
document.write("<br> 1.1. First way <br>");
let number = 400;
while (number > 0) {
  document.write("*".repeat(50) + "<br>");
  number = number - 50;
}

//Sprendimas
document.write("<br> 1.2. Other way </br>");
let i = 1;
let html = "";
while (i <= 400) {
  html += "*";
  if (i % 50 === 0) {
    html += "<br />";
  }
  i++;
}
document.write(html);

//
////////////////////////////////////////////
////////////////////////////////////////////
//Task 2
document.write("<hr><br><br> 2. Second task <br><br>");
let range = 0;
let nums150 = 0;
let redNums = ` `;
while (range < 300) {
  let randomNum = rand(0, 300);
  if (randomNum > 150) {
    nums150++;
  }
  if (randomNum > 270) {
    redNums = redNums + `<span style = 'color: red'> ${randomNum} </span>`;
  } else {
    redNums = redNums + randomNum + ` `;
  }
  range++;
}
document.write(redNums);
document.write(
  `<br><br>There are ${nums150} numbers that are bigger than 150.<br>`
);

//Sprendimas
document.write("<br><br> 2.2. Another way <br><br>");
i = 0;
html = 0;
let counter = 0;
while (i < 300) {
  let skaicius = rand(0, 300);
  if (skaicius > 275) {
    html += `<span style='color:red'>${skaicius}</span>`;
  } else {
    html += skaicius + " ";
  }
  if (skaicius > 150) counter++;
  i++;
}
document.write(html);
document.write(
  `<br><br>There are ${counter} numbers that are bigger than 150.<br><hr>`
);

//
////////////////////////////////////////////
////////////////////////////////////////////
//Task 3
document.write("<br><br> 3. Third task <br><br>");
let numlist = [];
for (let i = 0; i <= 3000; i++) {
  numlist.push(i);
}
let d77 = [1];
for (let n = 1; n < numlist.length; n++) {
  if (numlist[n] % 77 === 0) {
    console.log(numlist[n]);
    d77.push(n);
  } else {
    console.log("");
  }
}
document.write(d77);

//sprendimas
document.write("<br><br> 3.2. Second way <br><br>");
i = 1;
html = "";
let kiekis = 5000;
let daliklis = 77;

while (i <= kiekis) {
  let comma = ", ";
  if (i % daliklis === 0) {
    html += i;
    if (i < kiekis - daliklis) {
      html += comma;
    }
  }
  i++;
}
document.write(html);

//
////////////////////////////////////////////
////////////////////////////////////////////
//Task 4
document.write("<br><br><br><hr> Fourth task <br><br>");
for (let column = 1; column <= 100; column++) {
  for (let row = 1; row <= 100; row++) {
    document.write(`<span class="sq"> * </span> `);
  }
  document.write(`<span class="sq"><br></span>`);
}

//Sprendimas
document.write("<br><br> 4.2. Another way <br><br>");
let y = 0;
let size = 100;
html = "";

while (y < size) {
  let x = 0;
  let eilute = "";

  while (x < size) {
    eilute += "*";
    x++;
  }
  html += eilute + "<br>";
  y++;
}
document.write(`<div class='sq'>${html}</div>`);

//
////////////////////////////////////////////
////////////////////////////////////////////
//Task 5
document.write("<br><br><br><hr> Fifth task <br><br>");
for (let column = 1; column <= 100; column++) {
  for (let row = 1; row <= 100; row++) {
    document.write(`<span class="sq">*</span> `);
    if (column === row || column + row === 101) {
      document.write(`<span class="sq" style = 'color:red'>*</span>`);
    }
  }
  document.write(`<br>`);
}

//Sprendimas
document.write("<br><br> 5.2. Another way <br><br>");
let z = 0;
let dydis = 100;
html = "";

while (z < dydis) {
  let p = 0;
  let eilute = "";

  while (p < dydis) {
    if (p === z || p === dydis - 1 - z) {
      eilute += '<span style="color: red">*</span>';
    } else {
      eilute += "*";
    }
    p++;
  }
  html += eilute + "<br>";
  z++;
}

document.write('<div class="sq">' + html + "</div>");
