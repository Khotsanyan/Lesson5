let digit = 3;
let number = 2456;
let strnumber = number + "";
let j = 0;
for (let i = 0; i < strnumber.length; i++) {
  if (strnumber[i] == digit) {
    j++;
  }
}
if (j > 0) console.log("yes");
else console.log("no");
