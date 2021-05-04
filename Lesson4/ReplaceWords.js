let string = "_, we have a _.";
let array = ["Houston", "problem"];
let OtherString = "";
let k = 0;
for (let i of string) {
  if (i === "_") {
    i = array[k];
    k++;
  }
  OtherString = OtherString + i;
}
console.log(OtherString);
