document.write(
  `<style> body {color:white; text-align: center;
    padding: 20px; font-size: 40px; }</style>`
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
// a) sprendimas
//for loop sprendimas
let nail = 425; //5 x 85
let hits = 0;
for (let i = 0; i < 100; i++) {
  nail -= rand(5, 20);
  hits++;

  if (nail <= 0) break;
}
document.write(
  `<br> <div>  ${hits} lighter hits are needed to hammer the nail.</div>`
);

//while loop sprendimas
while (nail >= 0) {
  nail -= rand(5, 20);
  hits++;
}
document.write(
  `<br> <div>  ${hits} lighter hits are needed to hammer the nail.</div>`
);

//////
// b) sprendimas - continue statement
nail = 425;
hits = 0;

while (nail >= 0) {
  if (rand(0, 1)) continue;

  nail -= rand(20, 30);
  hits++;
}
document.write(
  `<br> <div>  ${hits} stronger hits are needed to hammer the nail.</div>`
);
