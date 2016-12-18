


var topics = ["orchid", "rose", "lilly", "foxglove", "peonie", "lilac"]

for ( var i= 0; i< topics.length; i++) {
$(#buttons).append("<button type="button" class="btn btn-primary" data-search="topics[i]">"+topics[i]+"</button>");
}
    

$(.button).on("click", function()){
  var  = $(this).data("search")

var queryURL = "http:api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC&limit=10";
console.log(queryURL)

$.ajax({url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      $('body').append(<p>Rating: "+response.data[0].rating+" "</p>");
      $('body').append("<img src='"+response.data[0].images.downsized.url+"'>")
    });

}