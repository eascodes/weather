const convertToC = (temp) => Math.round(temp - 273.15)
const convertToF = (temp) => Math.round((temp - 273.15) * (9/5) + 32);

const createElement = (type, textContent, parent) => {
    const varName = document.createElement(type);
    varName.textContent = textContent;
    parent.appendChild(varName);
    return varName;
} 

const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1)

const showData = (obj) => {
    const locationArea = document.querySelector(".location");
    const tempArea = document.querySelector(".temp-area");
    const buttonArea = document.createElement("div");
    const iconArea = document.querySelector(".icon-area");
    const detailsArea = document.querySelector(".details");

    const location = createElement("h1", obj.name, locationArea);
  
    const temp = createElement("p", `${convertToF(obj.temp)}°F`, tempArea);
    tempArea.appendChild(buttonArea);
    const fButton = createElement("button", "°F", buttonArea);
    const cButton = createElement("button", "°C", buttonArea);
    const icon = document.createElement("img");

    // Weather icon
    icon.src = `http://openweathermap.org/img/wn/${obj.icon}.png`;
    icon.setAttribute("alt", obj.description);
    iconArea.appendChild(icon);

    // Weather descriptions
    const description = createElement("p", capitalizeFirst(obj.description), iconArea);
    const feelsLike = createElement("p", `Feels like: ${convertToF(obj.feels_like)}°F`, detailsArea);
    const humidity = createElement("p", `Humidity: ${obj.humidity}%`, detailsArea);
    const highLow = createElement("p", `High/Low: ${convertToF(obj.temp_max)}°F/${convertToF(obj.temp_min)}°F`, detailsArea);

    location.classList.add("location-header");

    // Toggle between F and C
    fButton.addEventListener("click", () => {
        temp.textContent = `${convertToF(obj.temp)}°F`;
        feelsLike.textContent = `Feels like: ${convertToF(obj.feels_like)}°F`;
        highLow.textContent = `High/Low: ${convertToF(obj.temp_max)}°F/${convertToF(obj.temp_min)}°F`
    });

    cButton.addEventListener("click", () => {
        temp.textContent = `${convertToC(obj.temp)}°C`;
        feelsLike.textContent = `Feels like: ${convertToC(obj.feels_like)}°C`;
        highLow.textContent = `High/Low: ${convertToC(obj.temp_max)}°C/${convertToC(obj.temp_min)}°C`
    })
}

export default showData;