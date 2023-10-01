function compareNumbers() {
  const num1 = parseFloat(prompt("Enter the first number:"));
  const num2 = parseFloat(prompt("Enter the second number:"));

  if (!isNaN(num1) && !isNaN(num2)) {
    let result = "";

    if (num1 === num2) {
      result = "The numbers are equal.";
    } else if (num1 > num2) {
      result = "The first number is greater.";
    } else {
      result = "The second number is greater.";
    }

    document.getElementById('result').innerText = result;
  } else {
    alert("Please enter valid numbers.");
  }
}

/*
isNaN is a JavaScript function that stands for "is Not a Number." 
It is used to determine whether a value is NaN (Not a Number) or can be successfully 
converted into a number.

*/