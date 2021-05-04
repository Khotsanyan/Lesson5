let array = [4, 3, 0, 9];
let result = [];
for (let i = 0; i < array.length; i++) {
  result[array[i]] = array[i];
}
console.log(result);
