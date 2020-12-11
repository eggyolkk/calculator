number1 = '';
number2 = '';
operator = '';
nextInput = '';

const outputField = document.querySelector('p');

function add(x, y){
	return parseFloat(x + y);
}

function subtract(x, y){
	return parseFloat(x - y);
}

function multiply(x, y){
	return parseFloat(x * y);
}

function divide(x, y){
	return parseFloat(x / y);
}

function operate(){
	result = '';
	number1 = parseFloat(number1);
	number2 = parseFloat(number2);

	switch (operator) {
		case 'add':
		result = add(number1, number2);
		break;
		case 'subtract':
		result = subtract(number1, number2);
		break;
		case 'multiply':
		result = multiply(number1, number2);
		break;
		case 'divide':
		if (number2 == 0){
			result = "ERROR: Cannot divide by 0"
		} else {
			result = divide(number1, number2);
		}
		break;
	}

	outputField.textContent = result;
	
	number1 = result;
	number2 = '';
	nextInput = 'continue';
}

function displayNumber(i, n){ //helper function to display number on output field
	const opButton = document.getElementById(operator);
	
	if (i == '1'){
		if (n == '.') { //User can only input one decimal point per input
			if (!number1.includes('.')) {
				number1 += n;
				outputField.textContent = number1;
			}
		} else {
			number1 += n;
			outputField.textContent = number1;
		}
	} else {
		opButton.style.backgroundColor = '#2b2b2b';
		if (n == '.') { //User can only input one decimal point per input
			if (!number2.includes('.')) {
				number2 += n;
				outputField.textContent = number2;
			}
		} else {
			number2 += n;
			outputField.textContent = number2;
		}
	}	
}

function chooseNumber(n) {
	if (number1 != '' && number2 == '' && operator != '' && (nextInput == 'continue')){
		nextInput = 'num';
	}
	console.log('enter');

	//This if statement applies to when a user enters the first number for the first time
	if (operator == '') {
		displayNumber('1', n);

	} else if (number1 != '' && operator != ''){ //User enters the second number
		if (nextInput == ''){
			outputField.textContent = '';
			displayNumber('2', n);
		}
		else if (nextInput == 'op'){ //User has already done a calculation and wants to continue with another operation	
			displayNumber('2', n);
		}
		else if (nextInput == 'num'){ //User has already done a calculation and presses a new number - clears the calculator
			number1 = '';
			operator = '';
			displayNumber('1', n);
		}
	}
}

function chooseOperator(op) {
	if (number1 != '' && number2 == ''  && (nextInput == 'continue' || nextInput == 'num')){
		nextInput = 'op';
	}

	operator = op;
	const opButton = document.getElementById(op);
	opButton.style.backgroundColor = '#353535';

}

function clearOutput() {
	outputField.textContent = '0';
	number1 = '';
	number2 = '';
	operator = '';
	nextInput = '';
}

function backSpace(){
	if (operator == ''){
		number1 = number1.slice(0, -1);
		outputField.textContent = number1;
	} else {
		number2 = number2.slice(0, -1);
		outputField.textContent = number2;
	}
}

//Function to allow keyboard input
$(document).keypress( function(event) {
	let keycode = parseInt(event.keyCode);

	if ((keycode >= 46) && (keycode <= 57) && (keycode != 47)) {
	 	let num = String.fromCharCode(event.keyCode);
	 	chooseNumber(num);
 	} else {
 		switch(keycode) {
 			case 43:
			chooseOperator('add');
			break;
			case 45:
			chooseOperator('subtract');
			break;
			case 42:
			chooseOperator('multiply');
			break;
			case 47:
			chooseOperator('divide');
			break;
			case 13:
			operate();
			break;
 		}
 	}
 })

//Function to allow ESC and Backspace keyboard input
$(document).keydown( function(event) {
	const op = parseInt(event.keyCode);
	
	if (op == 8){
		backSpace();
	} else if (op == 27) {
		clearOutput();
	}
});