function checkGrade() {
    const grade = parseFloat(document.getElementById("grade").value);
    const remarksElement = document.getElementById("remarks");

    if (isNaN(grade) || grade < 0 || grade > 100) {
        remarksElement.innerText = "Invalid grade. Please enter a valid grade.";
    } else if (grade >= 90 && grade <= 100) {
        remarksElement.innerText = "Excellent! Keep up the good work!";
    } else if (grade >= 80 && grade < 90) {
        remarksElement.innerText = "Very good! Well done!";
    } else if (grade >= 70 && grade < 80) {
        remarksElement.innerText = "Good job! Keep improving!";
    } else if (grade >= 60 && grade < 70) {
        remarksElement.innerText = "Satisfactory. Work harder!";
    } else {
        remarksElement.innerText = "Needs improvement. Seek help if needed.";
    }
}