import categorizeWind from "./wind-categorization.mjs";

const weatherDate = document.getElementById("weatherToday");

const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");
const weatherDegree = document.getElementById("weatherDegree");
const weatherHumidity = document.getElementById("weatherHumidity");

const windSpeed = document.getElementById("windSpeed");
const windDescription = document.getElementById("windDescription");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-18.849083&lon=47.554528&appid=e32b390bc03cb68d913feecda1015b6c&units=metric"

const date = new Date();

console.log(date.toLocaleString());
console.log(date.toString());


async function fetchData() {
    try {
        const response = await fetch(url);
    
        const data = await response.json();
        console.log(data);

        renderWeather(data);
        
    } catch (error) {
        console.error(error);
    }
}

fetchData();

function renderWeather(weatherData) {
    // weatherIcon.src = `./images/weather/${weatherData.weather[0].icon}.svg`;
    weatherIcon.src = `./images/weather/01n.svg`;
    weatherIcon.alt = `${weatherData.weather[0].description} Icon`;
    weatherIcon.setAttribute("width", "50");
    weatherIcon.setAttribute("height", "50");

    weatherDescription.textContent = weatherData.weather[0].description;

    weatherDegree.innerHTML = `${weatherData.main.temp}&deg;C`;
    weatherHumidity.textContent = `${weatherData.main.humidity}%`;

    windSpeed.textContent = `${weatherData.wind.speed} m/s`
    windDescription .textContent = categorizeWind(weatherData.wind.speed);
}