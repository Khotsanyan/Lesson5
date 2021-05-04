let a = 35;
if (a % 3 === 0 && a % 5 === 0 && a % 7 === 0) {
  console.log(`${a}  is  a multiple of 3, 5 and 7.`);
} else if (a % 3 === 0 && a % 5 === 0) {
  console.log(`${a}  is  a multiple of 3 and 5.`);
}
if (a % 3 === 0 && a % 5 != 0) {
  console.log(`${a}  is  a multiple of 3.`);
} else if (a % 5 === 0 && a % 7 === 0 && a % 3 != 0) {
  console.log(`${a}  is  a multiple of  5 and 7.`);
}
if (a % 3 != 0 && a % 5 != 0 && a % 7 != 0) {
  console.log(`${a}  is not a multiple of 3, 5 and 7.`);
}
