let number = 455;
let strnumber = number + "";
let sum = 0;
let prod = 1;
for (let i = 0; i < strnumber.length; i++) {
  sum = sum + Number(strnumber[i]);
  prod = prod * Number(strnumber[i]);
}
if (prod != 0 && prod % sum === 0) {
  console.log(`Quotient is ${prod / sum}`);
} else if (prod % sum != 0) console.log(`Remainder is ${prod % sum}`);
else console.log("Cannot calculate.");
