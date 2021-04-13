
const formEl = document.getElementById("inputForm");
const searchButton = $("#searchBtn");
const clearBtn = $("#clear");

function init() {
    formEl.addEventListener("submit", handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault();

    //Get the data-lat and data-lon information from the textfield
    const locationInputEl = document.getElementById("locationInput");
    const data = {
        latitude: locationInputEl.getAttribute("data-lat"),
        longitude: locationInputEl.getAttribute('data-lon')
    }
    localStorage.setItem("restaurant-genie", JSON.stringify(data));

    window.location.href = `./results.html?q=0&latitude=${data.latitude}&long=${data.longitude}&id='+'100`;
}

$(document).ready(() => {
    init();
})