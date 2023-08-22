let firstOperand = "";
let currentDisplay = "0";
let currentOperator = null;
let shouldResetScreen = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.getElementById("equalsBtn");
const clearButton = document.getElementById("clearBtn");
const deleteButton = document.getElementById("deleteBtn");
const decButton = document.getElementById("decBtn");
const lastDisplayScreen = document.getElementById("lastDisplayScreen");
const currentDisplayScreen = document.getElementById("currentDisplayScreen");

equalsButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteNumber);
decButton.addEventListener("click", appendPoint);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperator(button.textContent))
);

function appendNumber(number) {
  if (currentDisplay === "0" || shouldResetScreen) {
    resetScreen();
  }
  currentDisplay += number;
  updateDisplay();
}

function resetScreen() {
  currentDisplay = "";
  shouldResetScreen = false;
}

function clear() {
  currentDisplay = "0";
  firstOperand = "";
  currentOperator = null;
  updateDisplay();
}

function appendPoint() {
  if (shouldResetScreen) {
    resetScreen();
  }
  if (currentDisplay === "") {
    currentDisplay = "0";
  }
  if (currentDisplay.includes(".")) {
    return;
  }
  currentDisplay += ".";
  updateDisplay();
}

function deleteNumber() {
  currentDisplay = currentDisplay.slice(0, -1);
  updateDisplay();
}

function setOperator(operator) {
  if (currentOperator !== null) {
    evaluate();
  }
  firstOperand = currentDisplay;
  currentOperator = operator;
  lastDisplayScreen.textContent = `${firstOperand} ${currentOperator}`;
  resetScreen();
}

function evaluate() {
  if (currentOperator === null || shouldResetScreen) {
    return;
  }
  if (currentOperator === "÷" && currentDisplay === "0") {
    alert("You can't divide by 0!");
    clear();
    return;
  }
  const secondOperand = currentDisplay;
  const result = operate(
    currentOperator,
    parseFloat(firstOperand),
    parseFloat(secondOperand)
  );
  currentDisplay = result.toString();
  updateDisplay();
  firstOperand = currentDisplay;
  currentOperator = null;
  lastDisplayScreen.textContent = "";
}

function updateDisplay() {
  currentDisplayScreen.textContent = currentDisplay;
}

function operate(operator, firstNum, secNum) {
  switch (operator) {
    case "+":
      return firstNum + secNum;
    case "−":
      return firstNum - secNum;
    case "×":
      return firstNum * secNum;
    case "÷":
      if (secNum === 0) {
        return "Error";
      } else {
        return firstNum / secNum;
      }
    default:
      return "Error";
  }
}
