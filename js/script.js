// Tangkap formulir suhu dan tombol reset/reserve
var temperatureForm = document.getElementById("temperatureForm");
var resetBtn = document.getElementById("resetBtn");
var reverseBtn = document.getElementById("reverseBtn");

// Tambahkan event listener untuk acara pengiriman formulir
temperatureForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir

  // Dapatkan nilai suhu dan unit dari input
  var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
  var unitSelect = document.getElementById("unitSelect").value;
  var conversionResult = document.getElementById("conversionResult");

  // Validasi input suhu
  if (isNaN(temperatureInput)) {
    conversionResult.textContent = "Masukkan suhu yang valid!";
    conversionResult.style.border = "none"; // Hapus border jika input tidak valid
    return;
  }

  // Konversi suhu berdasarkan unit yang dipilih
  var result;
  var formula;
  if (unitSelect === "celsius") {
    result = (temperatureInput * 9/5) + 32;
    formula = "(" + temperatureInput + " × 9/5) + 32";
    conversionResult.textContent = "Input suhu: " + temperatureInput + "°C\n" +
                                   "Hasil konversi: " + formula + " = " + result.toFixed(2) + "°F";
    conversionResult.style.border = "1px solid #ccc"; // Tambahkan border pada kotak hasil konversi
  } else if (unitSelect === "fahrenheit") {
    result = (temperatureInput - 32) * 5/9;
    formula = "(" + temperatureInput + " - 32) × 5/9";
    conversionResult.textContent = "Input suhu: " + temperatureInput + "°F\n" +
                                   "Hasil konversi: " + formula + " = " + result.toFixed(2) + "°C";
    conversionResult.style.border = "1px solid #ccc"; // Tambahkan border pada kotak hasil konversi
  }
});

// Tambahkan event listener untuk tombol reset
resetBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  var conversionResult = document.getElementById("conversionResult");
  conversionResult.style.border = "none"; // Hapus border saat mereset formulir
  document.getElementById("temperatureInput").value = "";
  conversionResult.textContent = "";
});

// Tambahkan event listener untuk tombol reserve
reverseBtn.addEventListener("click", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir
  var conversionResult = document.getElementById("conversionResult");
  var resultText = conversionResult.textContent;

  if (resultText.includes("°C")) {
    var fahrenheit = parseFloat(resultText.split("=")[1]);
    var celsius = (fahrenheit - 32) * 5/9;
    var formula = "(" + fahrenheit.toFixed(2) + " - 32) × 5/9";
    conversionResult.textContent = "Input suhu: " + fahrenheit.toFixed(2) + "°F\n" +
                                   "Hasil konversi: " + formula + " = " + celsius.toFixed(2) + "°C";
    conversionResult.title = "Formula konversi Fahrenheit ke Celsius: " + formula + " = " + celsius.toFixed(2);
  } else if (resultText.includes("°F")) {
    var celsius = parseFloat(resultText.split("=")[1]);
    var fahrenheit = (celsius * 9/5) + 32;
    var formula = "(" + celsius.toFixed(2) + " × 9/5) + 32";
    conversionResult.textContent = "Input suhu: " + celsius.toFixed(2) + "°C\n" +
                                   "Hasil konversi: " + formula + " = " + fahrenheit.toFixed(2) + "°F";
    conversionResult.title = "Formula konversi Celsius ke Fahrenheit: " + formula + " = " + fahrenheit.toFixed(2);
  }
});