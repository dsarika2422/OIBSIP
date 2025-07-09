function convertTemperature() {
  const input = document.getElementById("tempInput").value;
  const unit = document.getElementById("unitSelect").value;
  const resultDisplay = document.getElementById("resultDisplay");

  const temp = parseFloat(input);

  if (isNaN(temp)) {
    resultDisplay.textContent = "❗ Enter a valid number.";
    resultDisplay.style.color = "red";
    return;
  }

  let result = '';

  if (unit === "Celsius") {
    result = `${(temp * 9/5 + 32).toFixed(4)} °F`;
  } else if (unit === "Fahrenheit") {
    result = `${((temp - 32) * 5/9).toFixed(4)} °C`;
  } else if (unit === "Kelvin") {
    result = `${(temp - 273.15).toFixed(4)} °C`;
  }

  resultDisplay.textContent = result;
  resultDisplay.style.color = "#333";
}
