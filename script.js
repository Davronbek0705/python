let display = document.getElementById('display');
let expression = '';

function updateDisplay(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try {
    let result = eval(expression);
    display.value = result;
    expression = '';
  } catch (error) {
    display.value = 'Error';
    expression = '';
  }
}