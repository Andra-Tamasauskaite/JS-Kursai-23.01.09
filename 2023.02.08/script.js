document.write(
  `<style> body {color:white; text-align: center;
    padding: 20px; font-size: 12px; }</style>`
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
