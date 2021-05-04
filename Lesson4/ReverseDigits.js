let number = 2;
let strnumber = number + "";
let firstNumber = strnumber[0];
let secondNumber = strnumber[strnumber.length - 1];
if (number > 10 && strnumber[strnumber.length - 1] != 0) {
  for (let i = 1; i < strnumber.length - 1; i++) {
    secondNumber = secondNumber + strnumber[i];
  }
  secondNumber = secondNumber + firstNumber;
  console.log(secondNumber);
} else console.log(secondNumber);
