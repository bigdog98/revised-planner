
// This is our API key
var APIKey = "e2f52018758c1c6eafd68e4844ccf3b8";
// Boolean AKA switch
var gotWeatherFromButtonClick = false;
var cityField = $("#inputText [name='City']");
var zipCodeField = $("#inputText [name='Zip']");

function getWeather() {

  var currentCity = cityField.val();
  var zipCode = zipCodeField.val();

  var zipURL = `api.openweathermap.org/data/2.5/weather?zip=${zipCode},us`
  // Here we are building the URL we need to query the database
  var queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity},Burundi&units=imperial&appid=${APIKey}`;

  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET",
    dataType: 'jsonp',
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function (response) {

      // Log the queryURL
      console.log(queryURL);

      // Log the resulting object
      console.log(response);

      // Transfer content to HTML
      $(".city").html("<h1>" + response.name + " Weather </h1>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".deg").text("Wind Deg: " + response.wind.deg);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);

      // Log the data in the console as well
      console.log("Wind Speed: " + response.wind.speed);
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);

    });
}

// On clicking the button, we call getWeather function which updates variables
// then calls the API
$("#changeCity").on('click', function () {
  if(gotWeatherFromButtonClick) {
    getWeather();
    gotWeatherFromButtonClick = false;
    $("#inputText").hide();
    $(this).text('CHANGE CITY');
  } else {
    gotWeatherFromButtonClick = true;
    $("#inputText").show();
    $(this).text('GET WEATHER');
  }
});

getWeather();


