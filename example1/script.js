function calculateSum() {
  const num1 = parseFloat(document.getElementById('num1').value) || 0;
  const num2 = parseFloat(document.getElementById('num2').value) || 0;
  const num3 = parseFloat(document.getElementById('num3').value) || 0;
  const num4 = parseFloat(document.getElementById('num4').value) || 0;

  const sum = num1 + num2 + num3 + num4;

  document.getElementById('result').innerText = 'Sum: ' + sum;
}