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

    const location = createElement("h1", obj.name, content);
    const fButton = createElement("button", "°F", content);
    const cButton = createElement("button", "°C", content);
    const temp = createElement("p", `${convertToF(obj.temp)}°F`, content);
    const weather = createElement("p", obj.weather, content);
    const description = createElement("p", capitalizeFirst(obj.description), content);
    const feels_like = createElement("p", `Feels like: ${convertToF(obj.feels_like)}°F`, content);
    const humidity = createElement("p", `Humidity: ${obj.humidity}%`, content);
    const temp_max = createElement("p", `High: ${convertToF(obj.temp_max)}°F`, content);
    const temp_min = createElement("p", `Low: ${convertToF(obj.temp_min)}°F`, content);

    // Toggle between F and C
    fButton.addEventListener("click", () => {
        temp.textContent = `${convertToF(obj.temp)}°F`;
    });

    cButton.addEventListener("click", () => {
        temp.textContent = `${convertToC(obj.temp)}°C`;
    })
}

export default showData;