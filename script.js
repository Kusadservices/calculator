let display = document.getElementById("display");
let currentInput = "";

// Append number to the input
function appendNumber(num) {
  if (currentInput === "0" && num !== ".") {
    currentInput = num;
  } else {
    currentInput += num;
  }
  updateDisplay();
}

// Append operator
function appendOperator(op) {
  if (currentInput === "") return;
  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1); // replace last operator
  }
  currentInput += op;
  updateDisplay();
}

// Clear display
function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

// Calculate result
function calculate() {
  try {
    let result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch {
    updateDisplay("Error");
    currentInput = "";
  }
}

// Update display
function updateDisplay(value = currentInput) {
  display.textContent = value || "0";
}
