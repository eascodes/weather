/* eslint-disable no-console */
async function getData(location) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${  location  }&APPID=a19a9a696056416ad8f7e5a7816ff8f9`, {mode: 'cors'})
        const weatherData = await response.json();
        console.log(weatherData);
    } catch(err) {
        console.log(err);
    }
  }