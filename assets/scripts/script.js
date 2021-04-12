const locationInputEl = document.getElementById("locationInput");
const formEl = document.getElementById("inputForm");
const searchButton = $("#searchBtn");
const clearBtn = $("#clear");



function handleSubmit(e) {
    e.preventDefault();
    alert(locationInputEl.value);

    // localStorage.setItem(JSON.stringify(/*put cuisine id and lat and long object here */));
    window.location.href = "./results.html?q=0&latitude=" + locationInputEl.getAttribute('data-lat') +'&long='+locationInputEl.getAttribute('data-lon')+'&id='+'100';
}

formEl.addEventListener("submit", handleSubmit)

searchButton.on("click", searchButtonClicked);
clearBtn.on("click",clearSearches);    


// let lastSearched = {
//     lat: '155',
//     long: '22',
//     cuisineId:'144'
// }

// function returnLastSearch(){

//     let lastSearchParams= JSON.parse( localStorage.getItem(''))
// }