let array = [8, 0, 1, "hey", 12, 5, true, "2", null, 7, 3];
let oddArray = [];
let evenArray = [];
for (let i of array) {
  if (typeof i === "number" && i % 2 != 0) {
    oddArray.push(i);
  } else if (typeof i === "number" && i % 2 === 0) {
    evenArray.push(i);
  }
}
console.log(oddArray.concat(evenArray));
