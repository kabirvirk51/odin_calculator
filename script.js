const add = function (arg1, arg2) {
  return arg1 + arg2;
};

const subtract = function (arg1, arg2) {
  return arg1 - arg2;
};

const multiply = function (arg1, arg2) {
  return arg1 * arg2;
};

const divide = function (arg1, arg2) {
  if (arg2 === 0) {
    return "Error";
  }
  return arg1 / arg2;
};

let firstNum;
let operator;
let secNum;

const operate = function (operator, firstNum, secNum) {
  operator.toLowerCase();

  if (operator == "add") {
    return add(firstNum, secNum);
  } else if (operator == "subtract") {
    return subtract(firstNum, secNum);
  } else if (operator == "multiply") {
    return multiply(firstNum, secNum);
  } else if (operator == "divide") {
    return divide(firstNum, secNum);
  } else {
    return "Invalid Operator";
  }
};
