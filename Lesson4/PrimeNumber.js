let number = 401;
let j = 0;
for (let i = 1; i < number; i++) {
  if (number % 5 === 0) {
    j++;
  }
}
if (j > 2) {
  console.log("no");
} else console.log("yes");
