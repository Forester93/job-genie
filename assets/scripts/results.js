let resultsSection=$('#display-results');
let results = new URL(window.location.href);
let resultLat = results.searchParams.get("latitude");
let resultLong = results.searchParams.get("long");
let cuisineId = results.searchParams.get("id");

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

function buildPageOld(data){

    for(let i=1;i<data.restaurants.length;i++){
        let restaurant=$('<section>')
            .addClass('card col-5 m-1 bg-primary text-dark')
            .css("width","18rem")
            .append('<br>')
            .append('<br>')
            .append('<br>')
            .append($('<h2>')
                .text(data.restaurants[i].restaurant.name)
            )
            .append($('<img>')
                .addClass('card col-5-img-top restaurant-image')
                .attr('src','./assets/images/sample.jpg')
                .attr('alt','Photo of the restaurant')
            )
            .append($('<article>')
                .addClass('card col-5-text p-5')
                .append($('<p>')
                    .addClass('card-text text-dark font-bold')
                    .text(data.restaurants[i].restaurant.location.address))
            )
            .append($('<span>')
                .addClass('card col-5-body cuisines')
                .text("Cuisines Offered:"+data.restaurants[i].restaurant.cuisines)
            )
            .append($('<form>')
                .addClass('row justify-content-center align-items-center')
                .attr('restaurant-id',i)
                .append($('<button>')
                    .addClass('col-5 btn-success')
                    .text('Get There')
                )
            );

            resultsSection.append(restaurant);
    }
}
// alert(resultLat);
// alert(resultLong);
// alert(cuisineId);

fetch('https://developers.zomato.com/api/v2.1/search?entity_type=city&lat='+resultLat +'&lon='+resultLong+'&cuisine='+cuisineId+'&count=6' +'&sort=real_distance', {
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
    buildPage(data);

  });


  