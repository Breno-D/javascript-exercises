const convertToCelsius = function(tempInFarenheit) {
  let tempInCelsiusToReturn = (tempInFarenheit - 32)*(5/9);
  tempInCelsiusToReturn =  Math.round(tempInCelsiusToReturn * 10) / 10;
  return tempInCelsiusToReturn;
};

const convertToFahrenheit = function(tempInCelsius) {
  let tempInFarenheitToReturn = (tempInCelsius*(9/5)+32);
  tempInFarenheitToReturn = Math.round(tempInFarenheitToReturn * 10) / 10;
  return tempInFarenheitToReturn;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
