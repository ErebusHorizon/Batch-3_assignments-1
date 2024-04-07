function calculator() {
    // Get the input values
    var num1 = document.getElementById('number1').value.trim();
    var num2 = document.getElementById('number2').value.trim();
    var operator = document.getElementById('operator').value;

    // Validate input values
    var num1Error = document.getElementById('num1-error');
    var num2Error = document.getElementById('num2-error');

    // Regular expressions to check if input is a valid number or valid text
    var numRegex = /^\d+$/;
    var textRegex = /^[a-zA-Z\s]+$/;

    // Check if num1 contains only numbers or only text
    if (num1 !== '' && !numRegex.test(num1) && !textRegex.test(num1)) {
        // Display error message in the danger alert
        var dangerAlert = document.querySelector('.alert-danger');
        dangerAlert.textContent = 'Please enter either a valid number or valid text for Number 1.';
        dangerAlert.style.display = 'block';
        // Hide the success alert
        var successAlert = document.querySelector('.alert-success');
        successAlert.style.display = 'none';
        return;
    }

    // Check if num2 contains only numbers or only text
    if (num2 !== '' && !numRegex.test(num2) && !textRegex.test(num2)) {
        // Display error message in the danger alert
        var dangerAlert = document.querySelector('.alert-danger');
        dangerAlert.textContent = 'Please enter either a valid number or valid text for Number 2.';
        dangerAlert.style.display = 'block';
        // Hide the success alert
        var successAlert = document.querySelector('.alert-success');
        successAlert.style.display = 'none';
        return;
    }

    // Clear any previous error messages
    num1Error.style.display = 'none';
    num2Error.style.display = 'none';

    // Check if there are any validation errors
    if (operator === '') {
        // Display error message in the danger alert
        var dangerAlert = document.querySelector('.alert-danger');
        dangerAlert.textContent = 'Please select an operator.';
        dangerAlert.style.display = 'block';
        // Hide the success alert
        var successAlert = document.querySelector('.alert-success');
        successAlert.style.display = 'none';
        return;
    }

    // Perform the calculation based on the operator
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Additional validation for division by zero
    if (operator === '/' && num2 === 0) {
        // Display error message in the danger alert
        var dangerAlert = document.querySelector('.alert-danger');
        dangerAlert.textContent = 'Cannot divide by zero.';
        dangerAlert.style.display = 'block';
        // Hide the success alert
        var successAlert = document.querySelector('.alert-success');
        successAlert.style.display = 'none';
        return;
    }

    // Perform the calculation
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
