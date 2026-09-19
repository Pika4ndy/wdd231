const tempGermany = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const captionDesc = document.querySelector("figcaption");

const apikey = "e32b390bc03cb68d913feecda1015b6c";

const lat = `49.75`
const lon = `6.64`
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw new Error(await response.text());
        }

    } catch (error) {
        
        console.error(`Data fetching resulted in an error: ${error}`);
        
    }
}

apiFetch();

function displayResults(weatherData) {
    tempGermany.innerHTML = `${weatherData.main.temp}&deg;C`;
    weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    weatherIcon.alt = `${weatherData.weather[0].description} icon`;

    captionDesc.textContent = weatherData.weather[0].description;
}