function findHighestAndLowest() {
  const numbersArray = [];

  for (let i = 1; i <= 5; i++) {
    const number = parseFloat(document.getElementById(`number${i}`).value);
    if (!isNaN(number)) {
      numbersArray.push(number);
    } else {
      alert(`Please enter a valid number for Number ${i}.`);
      return;
    }
  }

  const highest = Math.max(...numbersArray);
  const lowest = Math.min(...numbersArray);

  const resultElement = document.getElementById('result');
  resultElement.textContent = `Highest number: ${highest}, Lowest number: ${lowest}`;
}






