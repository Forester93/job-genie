
const formEl = document.getElementById("inputForm");
const searchButton = $("#searchBtn");
const clearBtn = $("#clear");

/**
 * Page initializer
 */
function init() {
    formEl.addEventListener("submit", handleSubmit)
}

/**
 * Function to handle when submit button is clicked 
 */
function handleSubmit(e) {
    e.preventDefault();

    // Get location textfield element & check if input is valid
    const locationInputEl = document.getElementById("locationInput");
    if(!validLocation(locationInputEl)) 
    {
        $('#location-modal').modal('show');
        return;
    }
    
    // Add inputs to local store
    addInputsToLocalStore(locationInputEl);
    window.location.href = "./results.html";
}

/**
 * Validates if location is valid  
 */
function validLocation(locationInputEl) {
    return locationInputEl.value !== "" && 
            locationInputEl.getAttribute("data-lat") !== null && 
            locationInputEl.getAttribute("data-lon") !== null;
}

/**
 * Saves input to local store 
 */
function addInputsToLocalStore(locationInputEl) {
    const selectedCuisine = document.getElementsByClassName("cuisineSelector")[0].options;
    const selectedCuisineVal = selectedCuisine[selectedCuisine.selectedIndex].value;
    const data = {
        latitude: locationInputEl.getAttribute("data-lat"),
        longitude: locationInputEl.getAttribute('data-lon'),
        jobDescription: selectedCuisineVal
    }
    localStorage.setItem("restaurant-genie", JSON.stringify(data));
}

/**
 * If document is ready, call init()
 */
$(document).ready(() => {
    init();
})