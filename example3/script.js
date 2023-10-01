function displayFruitInfo() {
  const selectedFruit = document.getElementById('fruitSelect').value;
  let result = '';

  switch (selectedFruit) {
    case 'apple':
      result = 'Apples are delicious and nutritious.';
      break;
    case 'banana':
      result = 'Bananas are a great source of potassium.';
      break;
    case 'orange':
      result = 'Oranges are rich in vitamin C.';
      break;
    case 'grape':
      result = 'Grapes are high in antioxidants.';
      break;
    default:
      result = 'Select a fruit to display info.';
  }

  document.getElementById('result').innerText = result;
}