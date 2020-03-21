//URL for query to NASA image of the day widget
var queryURL = "https://api.nasa.gov/planetary/apod?api_key=4xivofU1aqBCnymU6yg5NKp9bgwSMGpVVmM0GRtH"

//vars to capture JSON returns
var dateDisplay = $("<div>");
var titleDisplay = $("<div>");
var imgDisplay = $("<img>");

$.ajax({
    url: queryURL,
    method: "GET"
    })

    // After the call is complete
    .then(function(response) {
        console.log(response);  //log out endpoint JSON object

        //get data
        //var date = response.date;
        var title = response.title;
        var url = response.url;
        var explanation = response.explanation;

        //dateDisplay.text(date);
        //dateDisplay.attr("class","text-center");
        titleDisplay.text("Photo title: "+title);
        titleDisplay.attr("class","text-center");
        imgDisplay.attr("src",url);
        imgDisplay.attr("class","img-fluid m-1");
        imgDisplay.attr("alt",explanation);

        //append image of day content to widget in index.html
       $("#nasa-widget").append(/*dateDisplay,*/imgDisplay,titleDisplay);

});
//$("#nasa-widget")