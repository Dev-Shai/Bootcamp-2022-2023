// Add your own API key between the ""
var APIKey = "a1ca8cc36acc9cdf8bcd7b5e5a399d08";

// Here we are building the URL we need to query the database
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

// We then created an AJAX call
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  // openweather API key:3e8f319374100581b000683f7de3cdc0
  // Create code to log the queryURL
console.log(queryURL);
  
  // Create CODE HERE to log the resulting object
console.log(response);
  // Create CODE HERE to calculate the temperature to celsius (converted from Kelvin)
var tempC = (response.main.temp - 273.15);
  // Create CODE HERE to transfer content to HTML
$(".city").html("<h1>" + response.name + " Weather Details</h1>");
  // Hint: To convert from Kelvin to Celsius: C = K - 273.15
  // Create CODE HERE to dump the temperature content into HTML
$(".temp").text("Temperature (Celsius) " + tempC.toFixed(2));
});