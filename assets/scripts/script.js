const locationInputEl = document.getElementById("locationInput");
const formEl = document.getElementById("inputForm");
const searchButton = $("#searchBtn");
const clearBtn = $("#clear");

function init() {
    formEl.addEventListener("submit", handleSubmit)
}

function handleSubmit(e) {
    e.preventDefault();

    //Put lat, lon, & cuisine id into an object and assign to a variable called data 
    //Store data in localstore
    const data = {}

    window.location.href = `./results.html?q=0&latitude=${data.latitude}&long=${data.longitude}&id='+'100`;
}

$(document).ready(() => {
    init();
})