const locationInputEl = document.getElementById("locationInput");
const formEl = document.getElementById("inputForm");


function handleSubmit(e) {
    e.preventDefault();
    alert(locationInputEl.value);
    window.location.href = "./results.html?q=" + locationInputEl.value;
}

formEl.addEventListener("submit", handleSubmit)

function myFunction(){
    var x = document.getElementById("topNavbar");
    if (x.className === "navbar") {
        x.className += "responsive";
    } else {
        x.className = "navbar";
    }
}