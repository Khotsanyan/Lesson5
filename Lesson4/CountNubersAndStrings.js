let array = [1, "10", "hi", 2, 3];
let countStr = 0;
let countInt = 0;
for (let i of array) {
  if (typeof i === "number") {
    countInt++;
  } else if (typeof i === "string") {
    countStr++;
  }
}
console.log(`Numbers: ${countInt}, Strings: ${countStr}`);
