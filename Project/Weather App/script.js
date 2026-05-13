document.addEventListener('DOMContentLoaded', () => {
    const cityInputDisplay = document.getElementById("city-input");
    const getWeatherBtn = document.getElementById("get-weather-btn");
    const weatherInfo = document.getElementById("weather-info");
    const cityNameInput = document.getElementById("city-name");
    const temperature = document.getElementById('temperature');
    const description = document.getElementById("description");
    const humidity = document.getElementById("humidity");
    const errorMessage = document.getElementById("error-message");

    const apiKey = "c4852e9d258dae22c0969bbfc6e54d7a";
    

    getWeatherBtn.addEventListener('click',async () => {
      const city = cityInputDisplay.value.trim();
      if (!city) return;

      try {
        const weatherData = await fetchWeather(city);
        displayWeatherdata(weatherData);
      } catch (error) {
        showError();
      }
    })

    async function fetchWeather(cityName) {
        try {

            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

            const response = await fetch(apiUrl);
            const data = await response.json();

            if (!response.ok) {
                throw new Error("City Not Found.")
            }

            return data;
        } catch (error) {
            throw error;
        }
    }

    function displayWeatherdata(weatherData) {
        weatherInfo.classList.remove("hidden");
        errorMessage.classList.add("hidden");

        cityNameInput.textContent = weatherData.name;
        temperature.textContent = `Temperature: ${weatherData.main.temp}°C`;
        description.textContent = `Sky: ${weatherData.weather[0].description}`;
        humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
        cityInputDisplay.value = "";
    }

    function showError() {
        weatherInfo.classList.add("hidden");
        errorMessage.classList.remove("hidden");
        cityInputDisplay.value = "";
    }

    cityInputDisplay.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        getWeatherBtn.click();
      }
    });
})