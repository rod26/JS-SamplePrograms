function generateTable() {
  const num = parseInt(document.getElementById('num').value);

  if (!isNaN(num)) {
    let table = '<h2>Multiplication Table for ' + num + '</h2><ul>';

    for (let i = 1; i <= 10; i++) {
      const result = num * i;
      table += `<li>${num} x ${i} = ${result}</li>`;
    }

    table += '</ul>';
    document.getElementById('result').innerHTML = table;
  } else {
    alert('Please enter a valid number.');
  }
}