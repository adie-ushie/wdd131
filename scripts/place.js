// Static weather information
const temperature = 29;
const windSpeed = 12;

// Calculate wind chill using the Celsius formula
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp)
        - (11.37 * Math.pow(speed, 0.16))
        + (0.3965 * temp * Math.pow(speed, 0.16));
}

// Display wind chill only when the conditions are suitable
if (temperature <= 10 && windSpeed > 4.8) {
    document.querySelector("#wind-chill").textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    document.querySelector("#wind-chill").textContent = "N/A";
}

// Display the current year
document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

// Display the document's last modified date
document.querySelector("#lastModified").textContent =
    document.lastModified;