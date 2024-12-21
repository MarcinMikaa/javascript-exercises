const convertToCelsius = function (fahrenheit) {
  const fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;
  return parseFloat(fahrenheitToCelsius.toFixed(1));
};

const convertToFahrenheit = function (celsius) {
  const celsiusToFahrenheit = (celsius * 9) / 5 + 32;
  return parseFloat(celsiusToFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
