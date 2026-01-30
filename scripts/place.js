document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

const temperature = 8;
const windSpeed = 10;  

const windChillEl = document.querySelector('.weather .value.windchill');

if (temperature <= 10 && windSpeed > 4.8) {
  windChillEl.textContent = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
} else {
  windChillEl.textContent = "N/A";
}
