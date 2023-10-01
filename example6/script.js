let display = document.getElementById('display');

function appendCharacter(char) {
  display.value += char;
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}