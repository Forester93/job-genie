let resultsSection=$('#display-results');

function buildPage(data){

    for(let i=1;i<data.restaurants.length;i++){
        let restaurant=
                $('<div>')
                .addClass('col-md-4 my-2')
                .append($('<div>')
                    .addClass('front-imgblock')
                    .append($('<div>')
                        .addClass('front-img')
                        .append($('<a>')
                            .attr('href','Restaurant Address Here')
                            .append($('<img>')
                                .attr('src','./assets/images/sample.jpg')
                                .attr('alt','Results Image')
                            )
                        )                        
                    )
                    .append($('<div>')
                        .addClass('front-text')
                        .append($('<h4>')
                            .text(data.restaurants[i].restaurant.name)
                        )
                        .append($('<p>')
                            .text(data.restaurants[i].restaurant.location.address)
                        )

                        .append($('<span>')
                            .addClass('card col-5-body cuisines')
                            .text("Cuisines Offered:"+data.restaurants[i].restaurant.cuisines)
                        )
                    )
                )

            resultsSection.append(restaurant);
    }
}

//TODO: Do a check if local storage doesn't exist
const dataJSON = localStorage.getItem("restaurant-genie");
const data = JSON.parse(dataJSON);
const resultLat = data.latitude;
const resultLong= data.longitude;
const cuisineId = data.cuisineId;

alert('URL CONSTRUCTED (LAT & LON FROM DATASTORE): https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+resultLat +'&lon='+resultLong+'&cuisine='+cuisineId+'&count=6' +'&sort=real_distance');


fetch('https://developers.zomato.com/api/v2.1/geocode?lat='+resultLat +'&lon='+resultLong, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  headers: {
  'user-key': '7749b19667964b87a3efc739e254ada2',
  'accept': 'application/json'
  }
  
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.restaurants);
    // buildPage(data);

  });