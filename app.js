


var topics = ["squares", "swirls", "mandelbrot", "circles", "angles"]

for (var i= 0; i< topics.length; i++) {
  var buttonHTML = '<button type="button" class="btn btn-primary buttonSearch" data-search=' + '"' + topics[i] + '" >'+  topics[i] +'</button>';
  $("#buttons").append(buttonHTML);
}
    

$(".buttonSearch").on("click", function(){
  var x = $(this).data("search")
 
  var queryURL = "http://api.giphy.com/v1/gifs/search?q="+x+"&api_key=dc6zaTOxFJmzC&limit=10&rating=G";
  console.log(queryURL)

  $.ajax({url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      console.log(response.data);
      console.log(response.data[0]);
      for (var j=0; j<response.data.length; j++){
        $('#gifArea').prepend('<p>Rating: ' + response.data[j].rating + '</p>');
        $('#gifArea').prepend('<img src=' +'"'+ response.data[j].images.downsized.url +'"'+ '>')
      }
  });

});