import categorizeWind from "./wind-categorization.mjs";

const weatherDate = document.getElementById("weatherToday");

const weatherIcon = document.getElementById("weatherIcon");
const weatherDescription = document.getElementById("weatherDescription");
const weatherDegree = document.getElementById("weatherDegree");
const weatherHumidity = document.getElementById("weatherHumidity");

const windSpeed = document.getElementById("windSpeed");
const windDescription = document.getElementById("windDescription");

const weatherForecastContainer = document.getElementById("weatherForecast");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-18.849083&lon=47.554528&appid=e32b390bc03cb68d913feecda1015b6c&units=metric";

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-18.849083&lon=47.554528&appid=e32b390bc03cb68d913feecda1015b6c&units=metric&cnt=40";

const today = new Date();

let [day, date, month, year] = [
    today.getDay(),
    today.getDate(),
    today.getMonth(),
    today.getFullYear()
];

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const yearMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

day = weekDays[day];
month = yearMonths[month];

async function fetchData() {
    try {
        const response = await fetch(url);
    
        const data = await response.json();

        renderCurrentWeather(data);
        
    } catch (error) {
        console.error(error);
    }

    // 3 Day Forecast
    try {
        const response = await fetch(forecastUrl);

        const data = await response.json();

        console.log(data);

        renderForecastedWeather(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

fetchData();

function renderCurrentWeather(weatherData) {
    weatherDate.textContent = `${day}, ${date} ${month} ${year}`;
    weatherIcon.src = `./images/weather/${weatherData.weather[0].icon}.svg`;
    weatherIcon.alt = `${weatherData.weather[0].description} Icon`;
    weatherIcon.setAttribute("width", "50");
    weatherIcon.setAttribute("height", "50");

    weatherDescription.textContent = weatherData.weather[0].description;

    weatherDegree.innerHTML = `${weatherData.main.temp}&deg;C`;
    weatherHumidity.textContent = `${weatherData.main.humidity}%`;

    windSpeed.textContent = `${weatherData.wind.speed} m/s`
    windDescription .textContent = categorizeWind(weatherData.wind.speed);
}

function renderForecastedWeather(weatherData) {
    let totalDisplayed = 0;

    for (const forecastElement of weatherData.list) {
        
        const forecastDate = new Date(forecastElement.dt * 1000);
        const [day, date, month, hour] = [
            weekDays[forecastDate.getDay()],
            forecastDate.getDate(),
            yearMonths[forecastDate.getMonth()],
            forecastDate.getHours()
        ];
        
        if (hour == 12) {
            const forecastCard = document.createElement("div");
            const forecastDateDisplay = document.createElement("span");
            const forecastImage = document.createElement("img");
            const forecastTemperature = document.createElement("span");

            forecastCard.classList.add("forecast");

            forecastDateDisplay.textContent = `${day}, ${date} ${month}`;
            forecastImage.src = `./images/weather/${forecastElement.weather[0].icon}.svg`;
            forecastImage.alt = `${forecastElement.weather[0].description} Icon`;
            forecastImage.loading = "lazy";
            forecastImage.width = 40;
            forecastImage.height = 40;
            forecastTemperature.innerHTML = `${forecastElement.main.temp}&deg;C`;

            forecastCard.appendChild(forecastDateDisplay);
            forecastCard.appendChild(forecastImage);
            forecastCard.appendChild(forecastTemperature);

            weatherForecastContainer.appendChild(forecastCard);
            totalDisplayed++;

            if (totalDisplayed >= 3) {
                break;
            }
        }
        
    }


    
}
