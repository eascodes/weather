import getLocation from "./data";
import './style.css';

const input = document.querySelector("#location");
const button = document.querySelector("#search-button");

button.addEventListener("click", () => {
    getLocation(input);
})


