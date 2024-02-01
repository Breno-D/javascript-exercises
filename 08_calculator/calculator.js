const add = function(num1, num2) {
  return sum([num1, num2]);
};

const subtract = function(num1, num2) {
	return sum([num1, -num2]);
};

const sum = function(args) {
  return args.reduce((accumulator,value) => accumulator + value,0);
};

const multiply = function(args) {
  return args.reduce((accumulator,value) => accumulator * value,1);
};

const power = function(number, power) {
	return Math.pow(number, power);
};

const factorial = function(factorialNumber) {
  let numbersToMultiply = [1]
	for(factorialNumber; factorialNumber>1;factorialNumber--)
  {
    numbersToMultiply.push(factorialNumber);
  }
  return multiply(numbersToMultiply);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
