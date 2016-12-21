


var topics = ["squares", "parallel lines", "mandelbrot", "circles", ]
console.log(topics);

for (var i= 0; i< topics.length; i++) {
  var buttonHTML = '<button type="button" class="btn btn-primary buttonSearch" data-search=' + '"' + topics[i] + '" >'+  topics[i] +'</button>';
  $("#buttons").append(buttonHTML);
}

//Below, I'm attmepting to append the value of the form input as a new button
$('#submitBtn').on('click', function (){

  var newTopic= $("#example-text-input".value)
  topics.append(newTopic)
  // console.log(topics.join)
    // topics.push(document.getElementById("input").value);
    //  x.innerHTML = topics.join('<br/>'); 
  // topics.unshift(input.val);
  return false;
})


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

        $('<img >', {
          'src': response.data[j].images.fixed_height_still.url,
          'data-still': response.data[j].images.fixed_height_still.url,
          'data-animate': response.data[j].images.fixed_height.url,
          'data-state': "still",
          class: "gif"
        }).prependTo('#gifArea');

        $('#gifArea').prepend('<p id="gifTag">Rating: ' + response.data[j].rating + '</p>');

        // $('#gifArea').prepend('<img src=' +'"'+ response.data[j].images.downsized.url +'"'+'>')
      }
  });

});

// I feel like this should work, and I have no idea why it doesn't
$('.gif').on("click", function() {
  var state = $(this).attr("data-state");

  if (state === "still"){
    $(this).attr("src", $(this).data("animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).data("still"));
    $(this).attr("data-state", "still");
  }
});


