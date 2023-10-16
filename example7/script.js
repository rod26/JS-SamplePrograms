function findHighestAndLowest() {
  const numbersInput = document.getElementById('numbers').value;
  const numbersArray = numbersInput.split(',').map(Number);

  if (numbersArray.length !== 5) {
    alert('Please enter 5 numbers separated by commas.');
    return;
  }

  const highest = Math.max(...numbersArray);
  const lowest = Math.min(...numbersArray);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Highest number: ${highest}, Lowest number: ${lowest}`;
}