function calculator() {
  // Get the input values
  var num1 = parseFloat(document.getElementById('number1').value);
  var num2 = parseFloat(document.getElementById('number2').value);
  var operator = document.getElementById('operator').value;

  // Validate input values
  if (isNaN(num1) || isNaN(num2) || operator === '') {
      // Display error message in the danger alert
      var dangerAlert = document.querySelector('.alert-danger');
      dangerAlert.textContent = 'Please enter valid numbers and select an operator.';
      dangerAlert.style.display = 'block';

      // Hide the success alert
      var successAlert = document.querySelector('.alert-success');
      successAlert.style.display = 'none';

      // Exit the function
      return;
  }

  // Additional validation for division by zero
  if (operator === '/' && num2 === 0) {
      // Display error message in the danger alert
      var dangerAlert = document.querySelector('.alert-danger');
      dangerAlert.textContent = 'Cannot divide by zero.';
      dangerAlert.style.display = 'block';

      // Hide the success alert
      var successAlert = document.querySelector('.alert-success');
      successAlert.style.display = 'none';

      // Exit the function
      return;
  }

  // Perform the calculation based on the operator
  var result;
  switch (operator) {
      case '+':
          result = num1 + num2;
          break;
      case '-':
          result = num1 - num2;
          break;
      case '*':
          result = num1 * num2;
          break;
      case '/':
          result = num1 / num2;
          break;
      default:
          result = 'Invalid operator';
  }

  // Display the result in the success alert
  var successAlert = document.querySelector('.alert-success');
  successAlert.textContent = 'Result: ' + result;
  successAlert.style.display = 'block';

  // Hide the danger alert
  var dangerAlert = document.querySelector('.alert-danger');
  dangerAlert.style.display = 'none';
}
