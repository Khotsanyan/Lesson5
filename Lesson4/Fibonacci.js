let n = 5;
let a = 0;
let b = 1;
let c;
if (n === 1) {
  console.log(a);
} else if (n === 2) {
  console.log(b);
} else {
  for (let i = 1; i < n; i++) {
    c = b;
    b = a + b;
    a = c;
  }
  console.log(b);
}
