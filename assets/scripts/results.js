let resultsModalBodyEl = $("#results-modal-body");

/**
 * Constructs the page with results 
 */
function buildPage(data){
    const resultsSection=$('#display-results');
    
    for(let i in data){
        let job=
                $('<div>')
                .addClass('col my-2')
                .append($('<div>')
                    .addClass('front-imgblock')
                    .append($('<div>')
                        .addClass('front-img')
                        .append($('<a>')
                            .addClass('custom-anchor')
                            .attr('href',data[i].company_url)
                            .text(data[i].company)
                            )
                        )                        
                    )
                    .append($('<div>')
                        .addClass('front-text')
                        .append($('<h4>')
                            .text(data[i].title)
                        )
                        .append($('<div>')
                            .html(data[i].description)
                        )
                        .append($('<span>')
                            .addClass('position')
                            .addClass('card col-5-body jobs')
                            .text("Type:"+data[i].type)
                        )
                    )

            resultsSection.append(job);
    }
}

/**
 * Fetch the constructed URL through a proxy.
 */
function fetchJobs(url) {
    fetch(`https://api.codetabs.com/v1/proxy?quest=${url}`
    )
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((results) => checkResults(results));
}

/**
 * Check whether there are results. If results exist, display them. Otherwise, show modal popup
 * and redirect them to index.html
 */
function checkResults(results) {
    if(results.length==0){
        resultsModalBodyEl.html('No results found. Please refine your search results');
        $("#results-modal").modal('show');
    }
    buildPage(results);
}

/**
 * Initializes the results page
 */
function initialize() {
    $('#redirect-button').on('click', function() {
        window.location.href = "index.html";
    });

    //If no previous searches, show modal
    if(!localStorage.getItem('restaurant-genie')) {
        resultsModalBodyEl.html('No saved searches were found in this browsing session. Please submit a search query');
        $("#results-modal").modal('show');
    } 

    //Retrieve local store
    const dataJSON = localStorage.getItem("restaurant-genie");
    const data = JSON.parse(dataJSON);
    const resultLat = data.latitude;
    const resultLong= data.longitude;
    const jobDescription = data.jobDescription;

    //Construct URL
    let url='';
    if (jobDescription=='All Programming Jobs'){
        url='https://jobs.github.com/positions.json?lat='+resultLat+'&long='+resultLong;
    } else {
        url='https://jobs.github.com/positions.json?description='+jobDescription+'&lat='+resultLat+'&long='+resultLong;
    }

    fetchJobs(url);
}

$(document).ready(() => {
    initialize();
})