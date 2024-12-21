const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (arr) {
  let multiply = arr[0];

  for (let i = 1; i < arr.length; i++) {
    multiply *= arr[i];
  }
  return multiply;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (number) {
  let result = 1;

  for (let i = number; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
