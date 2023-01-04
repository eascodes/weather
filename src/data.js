/* eslint-disable no-console */
import showData, { removeError, showError } from "./showData";

const filterData = (data) => {
    // Create weather object with only relevant data
    const weatherObj = {
        name: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        icon: data.weather[0].icon,
    }
    showData(weatherObj);
}

async function getData(location) {
    const searchDiv = document.querySelector(".search");

    try {
        // Remove error message if one exists
        if (searchDiv.querySelector(".error")) {
            removeError(searchDiv);
        }
        
        // Fetch data from API
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${  location  }&APPID=a19a9a696056416ad8f7e5a7816ff8f9`, {mode: 'cors'})
        const weatherData = await response.json();
        filterData(weatherData);
    } catch(err) {
        // Show error message if location not found
        showError(searchDiv);
    }
  }

const getLocation = (input) => {
    const location = input.value;
    getData(location);
}

export default getLocation;