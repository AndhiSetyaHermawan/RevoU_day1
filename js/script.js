// Event listener untuk tombol Konversi
document.getElementById("konversiBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir

  // Mendapatkan nilai suhu dari input
  var temperature = parseFloat(document.getElementById("temperature").value);
  var resultElement = document.getElementById("result");
  var result;

  // Validasi input suhu
  if (isNaN(temperature)) {
    result = "Masukkan suhu yang valid!";
  } else {
    // Melakukan konversi suhu ke Fahrenheit
    result = "Hasil konversi: " + convertToFahrenheit(temperature).toFixed(2) + " Fahrenheit";
  }

  // Menampilkan hasil konversi
  resultElement.innerHTML = result;
});

// Event listener untuk tombol Reset
document.getElementById("resetBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir
  resetForm();
});

// Event listener untuk tombol Reserve
document.getElementById("reverseBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Menghentikan pengiriman formulir
  reverseConversion();
});

// Fungsi untuk konversi suhu ke Fahrenheit
function convertToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Fungsi untuk mereset formulir
function resetForm() {
  document.getElementById("temperature").value = "";
  document.getElementById("result").innerHTML = "";
}

// Fungsi untuk membalik konversi dari Fahrenheit ke Celcius
function reverseConversion() {
  var temperature = parseFloat(document.getElementById("temperature").value);
  var resultElement = document.getElementById("result");
  var result;

  // Validasi input suhu
  if (isNaN(temperature)) {
    result = "Masukkan suhu yang valid!";
  } else {
    // Melakukan konversi suhu ke Celcius
    result = "Hasil konversi: " + convertToCelsius(temperature).toFixed(2) + " Celcius";
  }

  // Menampilkan hasil konversi
  resultElement.innerHTML = result;
}