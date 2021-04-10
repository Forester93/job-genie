const locationInputEl = document.getElementById("locationInput");
const formEl = document.getElementById("inputForm");
const searchButton = $("#searchBtn");
const clearBtn = $("#clear");


function handleSubmit(e) {
    e.preventDefault();
    alert(locationInputEl.value);
    window.location.href = "./results.html?q=" + locationInputEl.value;
}

formEl.addEventListener("submit", handleSubmit)

searchButton.on("click", searchButtonClicked);
clearBtn.on("click",clearSearches);    