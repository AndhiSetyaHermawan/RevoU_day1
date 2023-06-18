document.getElementById("temperatureForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir

  var temperature = parseFloat(document.getElementById("temperature").value);
  var resultElement = document.getElementById("result");
  var result;

  if (isNaN(temperature)) {
    result = "Masukkan suhu yang valid!";
  } else {
    result = "Hasil konversi: " + convertToFahrenheit(temperature) + " Fahrenheit";
  }

  resultElement.innerHTML = result;
});

function convertToFahrenheit(celcius) {
  return (celcius * 9/5) + 32;
}

function resetForm() {
  document.getElementById("temperatureForm").reset();
  document.getElementById("result").innerHTML = "";
}

function reverseConversion() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var resultElement = document.getElementById("result");
  var result;

  if (isNaN(temperature)) {
    result = "Masukkan suhu yang valid!";
  } else {
    result = "Hasil konversi: " + convertToCelcius(temperature) + " Celcius";
  }

  resultElement.innerHTML = result;
}

function convertToCelcius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}