const convertToC = (temp) => Math.round(temp - 273.15)
const convertToF = (temp) => Math.round((temp - 273.15) * (9/5) + 32);

const showData = (obj) => {
    const content = document.querySelector(".content");
    const location = document.createElement("h1");
    location.textContent = obj.name;
    content.appendChild(location);

    // Create & append Fahrenheit button
    const fButton = document.createElement("button");
    fButton.textContent = "F";
    content.appendChild(fButton);

    // Create & append Celsius button
    const cButton = document.createElement("button");
    cButton.textContent = "C";
    content.appendChild(cButton);

    const temp = document.createElement("p");
    temp.textContent = `${convertToF(obj.temp)} degrees F`;
    content.appendChild(temp);

    // Toggle between F and C
    fButton.addEventListener("click", () => {
        temp.textContent = `${convertToF(obj.temp)} degrees F`;
    });

    cButton.addEventListener("click", () => {
        temp.textContent = `${convertToC(obj.temp)} degrees C`;
    })
}

export default showData;