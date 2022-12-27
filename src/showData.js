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
    const content = document.querySelector(".content");
    const locationArea = document.querySelector(".location");
    const tempArea = document.querySelector(".temp");
    const iconArea = document.querySelector(".icon");
    const detailsArea = document.querySelector(".details");

    const location = createElement("h1", obj.name, locationArea);
    const fButton = createElement("button", "°F", locationArea);
    const cButton = createElement("button", "°C", locationArea);
    const temp = createElement("p", `${convertToF(obj.temp)}°F`, tempArea);
    //const weather = createElement("p", obj.weather, iconArea); //use this for pic matching?
    const description = createElement("p", capitalizeFirst(obj.description), iconArea);
    const feels_like = createElement("p", `Feels like: ${convertToF(obj.feels_like)}°F`, detailsArea);
    const humidity = createElement("p", `Humidity: ${obj.humidity}%`, detailsArea);
    const temp_max = createElement("p", `High: ${convertToF(obj.temp_max)}°F`, detailsArea);
    const temp_min = createElement("p", `Low: ${convertToF(obj.temp_min)}°F`, detailsArea);

    location.classList.add("location-header");

    // Toggle between F and C
    fButton.addEventListener("click", () => {
        temp.textContent = `${convertToF(obj.temp)}°F`;
    });

    cButton.addEventListener("click", () => {
        temp.textContent = `${convertToC(obj.temp)}°C`;
    })
}

export default showData;