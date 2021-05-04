let a = -7;
let b = -5;
let c = 0;
if (a === 0 || b === 0 || c === 0) {
  console.log("unsigned");
} else {
  if (a < 0 && b < 0 && c < 0) console.log("-");
  else if ((a < 0 && b < 0) || (a < 0 && c < 0) || (b < 0 && c < 0))
    console.log("+");
  else if (a < 0 || b < 0 || c < 0) console.log("-");
  else console.log("+");
}
