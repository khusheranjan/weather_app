const citySearchBox = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(cityName) {
    const apiKey = '77a95c3fb2c6ab863c3875994984551c';
    const apiEndpoint = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${apiKey}`;

    const response = await fetch(apiEndpoint);
    const data = await response.json();
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temperature").innerHTML = data.main.temp + "ºC";
    document.querySelector(".feelslike").innerHTML = "Feels like " + data.main.feels_like + "ºC";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".description").innerHTML = data.weather[0].description;
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
    const iconCode = data.weather[0].icon;
    weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}@4x.png`;
    
    document.querySelector(".weather-info").style.display= "block";
}

searchBtn.addEventListener("click", () => {
    checkWeather(citySearchBox.value);
});

citySearchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") checkWeather(citySearchBox.value);
});
