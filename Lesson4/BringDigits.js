let a = 256;
let b = a + "";
let c = b[0];
if (b[b.length - 1] != 0 && b.length != 1) {
  for (let i = 1; i < b.length - 1; i++) {
    c = c + b[i];
  }
  c = b[b.length - 1] + c;
  console.log(c);
} else {
  console.log(b);
}
