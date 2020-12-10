number1 = '';
number2 = '';
operator = '';
nextInput = '';


const outputField = document.querySelector('p');

function add(x, y){
	return parseInt(x + y);
}

function subtract(x, y){
	return parseInt(x - y);
}

function multiply(x, y){
	return parseInt(x * y);
}

function divide(x, y){
	return parseFloat(x / y);
}

function operate(){
	result = '';
	number1 = parseFloat(number1);
	number2 = parseFloat(number2);
	
	if (operator === 'add') {
		result = add(number1, number2);
	} else if (operator === 'subtract') {
		result = subtract(number1, number2);	
	} else if (operator === 'multiply') {
		result = multiply(number1, number2);
	}
	else if (operator === 'divide') {
		result = divide(number1, number2);
	}

	outputField.textContent = result;
	
	number1 = result;
	number2 = '';
	nextInput = 'continue';

	console.log(number1, number2);
}

function chooseNumber(n) {
	const opButton = document.getElementById(operator);
	console.log("check " + number1);
	if (number1 != '' && number2 == '' && operator != '' && (nextInput == 'continue')){
		nextInput = 'num';
	}

	if (operator == '') {
		number1 += n;
		outputField.textContent = number1;
		
	} else if (number1 != '' && operator != '' && nextInput == '') {
		opButton.style.backgroundColor = '#2b2b2b';

		outputField.textContent = '';
		number2 += n;
		outputField.textContent = number2;

		console.log("number1: " + number1 + " number2: " + number2);
	
	} else if (number1 != '' && operator != '' && nextInput == 'op') {
		opButton.style.backgroundColor = '#2b2b2b';
		number2 += n;
		outputField.textContent = number2;
	
	} else if (number1 != '' && operator != '' && nextInput == 'num') {
		opButton.style.backgroundColor = '#2b2b2b';
		number1 = '';
		number1 += n;
		outputField.textContent = number1;

		console.log("number1: " + number1 + " number2: " + number2);
		operator = '';
	
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
	outputField.textContent = '';
	number1 = '';
	number2 = '';
	operator = '';
	nextInput = '';
}