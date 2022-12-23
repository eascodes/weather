import getLocation from "./data";

const input = document.querySelector("#location");
const button = document.querySelector("#search");

button.addEventListener("click", () => {
    getLocation(input);
})


