
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
    const selectedCuisine = document.getElementsByClassName("cuisineSelector")[0].options;
    const selectedCuisineVal = selectedCuisine[selectedCuisine.selectedIndex].value;
    
    const data = {
        latitude: locationInputEl.getAttribute("data-lat"),
        longitude: locationInputEl.getAttribute('data-lon'),
        cuisineId: selectedCuisineVal
    }
    localStorage.setItem("restaurant-genie", JSON.stringify(data));

    window.location.href = "./results.html";
}

$(document).ready(() => {
    init();
})