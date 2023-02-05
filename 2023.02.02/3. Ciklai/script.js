document.write(
  `<style> body {color:white; text-align: center;
    padding: 20px;} .sq {font-size: 12px; line-height: 0px;}</style>`
);

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//Task 1
document.write("1.First task <br><br>");

document.write("<br> 1.1. First way <br>");
let number = 400;

while (number > 0) {
  document.write("*".repeat(50) + "<br>");
  number = number - 50;
}

//or
document.write("<br> 1.2. Other way </br>");

let star = "*".repeat(50);
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");
document.write(star + "<br/>");

//Task 2
document.write("<br><br> Second task <br><br>");

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

//Task 3
document.write("<br><br> Third task <br><br>");

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

//Task 4
document.write("<br><br><br><hr> Fourth task <br><br>");

for (let column = 1; column <= 100; column++) {
  for (let row = 1; row <= 100; row++) {
    document.write(`<span style = 'font'size: 10px;'> * </span> `);
  }
  document.write(`<br>`);
}

//Task 5
document.write("<br><br><br><hr> Fifth task <br><br>");

for (let column = 1; column <= 100; column++) {
  for (let row = 1; row <= 100; row++) {
    document.write(`<span class="sq"> * </span> `);
    if (column === row || column + row === 101) {
      document.write(`<span class="sq" style = 'color:red'> * </span>`);
    }
  }
  document.write(`<br>`);
}
