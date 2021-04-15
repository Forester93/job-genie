let resultsSection=$('#display-results');

function buildPage(data){

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

//TODO: Do a check if local storage doesn't exist

if(!localStorage.getItem('restaurant-genie')) {
    alert('No saved searches were found in this browsing session. Please submit a search query');
    window.location.href='index.html';
}
const dataJSON = localStorage.getItem("restaurant-genie");
const data = JSON.parse(dataJSON);
const resultLat = data.latitude;
const resultLong= data.longitude;
const jobDescription = data.jobDescription;

// alert('URL CONSTRUCTED (LAT & LON FROM DATASTORE): https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+resultLat +'&lon='+resultLong+'&cuisine='+cuisineId+'&count=6' +'&sort=real_distance');
let url='';
if (jobDescription=='All Programming Jobs'){
    url='https://jobs.github.com/positions.json?lat='+resultLat+'&long='+resultLong;
}else{
    url='https://jobs.github.com/positions.json?description='+jobDescription+'&lat='+resultLat+'&long='+resultLong;
}


alert(url);

fetch(`https://api.codetabs.com/v1/proxy?quest=${url}`
// ,{
//   // The browser fetches the resource from the remote server without first looking in the cache.
//   // The browser will then update the cache with the downloaded resource.
// //   mode: "no-cors"
// } 
)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    if(data.length==0){
        alert('No results found. Please refine your search results');
        window.location.href='index.html';
        return;
    }
    buildPage(data);

  });
