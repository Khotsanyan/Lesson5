let array = [21, -9, 15, 2116, -71, 33];
let number = 14;
let min = Math.abs(array[0] - number);
let index = -1;
if (array[0] === number) {
  index = 0;
} else {
  for (let i = 1; i < array.length; i++) {
    if (array[i] === number) {
      index = i;
      break;
    } else if (min > Math.abs(array[i] - number)) {
      min = Math.abs(array[i] - number);
      index = i;
    }
  }
}
console.log(index);
