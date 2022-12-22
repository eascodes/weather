/* eslint-disable no-console */
function filterData(data) {
    const weatherObj = {
        name: data.name,
        weather: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        humidity: data.main.humidity,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset
    }
    console.log(weatherObj);
}

async function getData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${  location  }&APPID=a19a9a696056416ad8f7e5a7816ff8f9`, {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData);
        filterData(weatherData);
    } catch(err) {
        console.log(err);
    }
  }

getData("London");
