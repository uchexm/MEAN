let fs = require("fs");

let total = 0;

// I/O Cycle
fs.readFile("./index.js", () => {
  setTimeout(print1, 0);
  setImmediate(print2); //set immediate gets priority in the I O cycle
});

let n = 1;

function print1() {
  total = n * 10;
  console.log("The total 1 is:", total);
  n++;
}

function print2() {
  total = n * 10;
  console.log("The total 2 is:", total);
}
