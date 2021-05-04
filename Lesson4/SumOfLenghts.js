let array = ["anymore", "raven", "me", "communicate"];
let max = array[0].length;
let min = array[0].length;
let sum;
for (let i = 1; i < array.length; i++) {
  if (max < array[i].length) {
    max = array[i].length;
  } else if (min > array[i].length) {
    min = array[i].length;
  }
}
sum = min + max;
console.log(sum);
