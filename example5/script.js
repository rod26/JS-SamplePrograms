function calculateFactorial() {
  const number = parseInt(document.getElementById('number').value);

  if (!isNaN(number) && number >= 0) {
    let factorial = 1;

    for (let i = 1; i <= number; i++) {
      factorial *= i;
    }

    document.getElementById('result').innerText = `Factorial of ${number} is: ${factorial}`;
  } else {
    alert('Please enter a non-negative integer.');
  }
}