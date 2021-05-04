let arr = [45, 26, 71];
let min;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
      min = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = min;
    }
  }
}
console.log(arr);
