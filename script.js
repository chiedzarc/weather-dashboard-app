const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const weatherIcon = document.getElementById("weatherIcon");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const errorMsg = document.getElementById("errorMsg");

searchBtn.addEventListener("click", function () {
   searchWeather();
});

cityInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchWeather ();
    }
});

function searchWeather() {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    getWeather(city);
}

const apiKey = "b12b70d5bbed6a26397f76e3282154e1";

async function getWeather(city) {
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        displayWeather(data);

    } catch (error) {
        errorMsg.textContent = error.message;
    }
}

searchBtn.addEventListener("click", function () {
    const city = cityInput.value.trim();

    if (city === "") {
        alert("Please enter a city");
        return;
    }

    getWeather(city);
})

function displayWeather(data) {
    cityName.textContent = data.name;

    temperature.textContent =
    `${Math.round(data.main.temp)}°C`;

    description.textContent = 
    data.weather[0].description;

    const iconCode= data.weather[0].icon;

    weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    humidity.textContent = `Humidity: ${data.main.humidity}%`

    wind.textContent = `Wind: ${data.wind.speed} km/h`
}

async function getWeather(city) {
    const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
     displayWeather(data);
}