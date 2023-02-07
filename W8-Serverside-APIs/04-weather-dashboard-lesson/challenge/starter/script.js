// Variables for API key and search history
const APIKey = "3e8f319374100581b000683f7de3cdc0";
let previousSearches = [];

// Selectors for form and weather information
const searchForm = document.querySelector("#search-form");
const searchTerm = document.querySelector("#search-term");
const weatherInfo = document.querySelector("#weather-info-array");
const fiveDayForecast = document.querySelector("#fiveDayForecast");

// Variables for date and time
let date = new Date();
let currentTime = date.toLocaleTimeString();

// Event listener for form submit
searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let userInput = document.querySelector("#user-input").value;
    getWeatherData(userInput);
  });

  // Event Listener for the submit button to retrieve weather data
document.querySelector("#search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Retrieve the user input value
    var userInput = document.querySelector("#user-input").value;
    // Check if the user input is not empty
    if (userInput) {
    // Call the getWeatherData function and pass the user input as an argument
    getWeatherData(userInput);
    }
    });
    
    // Function to retrieve the weather data from the OpenWeather API
    function getWeatherData(userInput) {
    // API endpoint URL with the user input as a parameter
    var weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=b1b35bba8b434a28a0be2a3e1071ae5b";
    // Use fetch to retrieve the weather data
    fetch(weatherApiUrl)
    .then(function(response) {
    // Check if the response is successful
    if (response.ok) {
    // Parse the response data as JSON
    return response.json();
    }
    // If the response is not successful, throw an error
    throw new Error("Error retrieving weather data. Error code: " + response.status);
    })
    .then(function(weatherData) {
    // Update the search term in the header
    document.querySelector("#search-term").textContent = weatherData.name;
    // Call the displayWeatherData function and pass the weather data as an argument
    displayWeatherData(weatherData);
    })
    .catch(function(error) {
    console.error(error);
    alert("An error occurred while retrieving the weather data. Please try again.");
    });
    }
    
    // Function to display the weather data on the page
    function displayWeatherData(weatherData) {
    // Get the temperature in Kelvin
    var tempKelvin = weatherData.main.temp;
    // Convert the temperature to Celsius
    var tempCelsius = tempKelvin - 273.15;
    // Round the temperature to 1 decimal place
    tempCelsius = tempCelsius.toFixed(1);
    // Get the humidity
    var humidity = weatherData.main.humidity;
    // Get the wind speed
    var windSpeed = weatherData.wind.speed;
    // Get the description of the weather
    var weatherDescription = weatherData.weather[0].description;
    // Update the weather information on the page
    document.querySelector("#weather-info-array").innerHTML =
    "Temperature: " + tempCelsius + "℃<br>Humidity: " + humidity + "%<br>Wind Speed: " + windSpeed + "m/s<br>Weather: " + weatherDescription;
    }

    // Part 4: Generate 5-day forecast cards

function generateFiveDayForecast(fiveDayData) {
    $("#5dayForecast").empty();
  
    fiveDayData.forEach(function (forecast) {
      // Get the date, temperature, humidity, and icon for each day
      var forecastDate = moment.unix(forecast.dt).format("MM/DD/YYYY");
      var forecastTemp = forecast.main.temp;
      var forecastHumidity = forecast.main.humidity;
      var forecastIcon = forecast.weather[0].icon;
  
      // Create a new div for each day's forecast
      var fiveDayCard = $("<div>").addClass("col-sm-6 col-md-4 col-lg-2 p-2 five-day-card");
  
      // Add the date to the div
      var fiveDayDate = $("<h5>").text(forecastDate).addClass("text-center");
      fiveDayCard.append(fiveDayDate);
  
      // Add the weather icon to the div
      var fiveDayIcon = $("<img>").attr("src", "http://openweathermap.org/img/w/" + forecastIcon + ".png");
      fiveDayCard.append(fiveDayIcon);
  
      // Add the temperature to the div
      var fiveDayTemp = $("<p>").text("Temperature: " + forecastTemp + " °F").addClass("text-center");
      fiveDayCard.append(fiveDayTemp);
  
      // Add the humidity to the div
      var fiveDayHumidity = $("<p>").text("Humidity: " + forecastHumidity + "%").addClass("text-center");
      fiveDayCard.append(fiveDayHumidity);
  
      // Append the five day card to the 5-day forecast section
      $("#5dayForecast").append(fiveDayCard);
    });
  }
  

  // ===  ====  === === 
  // current working code as of 7/2/23

// Selectors for form and weather information. 

const searchFormEl = document.querySelector("#search-form");
const userInputEl = document.querySelector("#user-input");
const searchTermEl = document.querySelector("#search-term");
const weatherInfoEl = document.querySelector("#weather-info-array");
const fiveDayForecastEl = document.querySelector("#fiveDayForecast");
const fiveDayForecastHeadingEl = document.querySelector("#fiveDayForecastHeading");
const searchHistoryEl = document.querySelector("#search-history");
const currentWeatherEl = document.querySelector("#current-weather");
const weatherInfoListEl = document.querySelector("#weather-info-list");
const currentWeatherIconEl = document.querySelector("#current-weather-icon");
const currentWeatherTempEl = document.querySelector("#current-weather-temp");
const currentWeatherHumidityEl = document.querySelector("#current-weather-humidity");
const currentWeatherWindEl = document.querySelector("#current-weather-wind");
const currentWeatherUVEl = document.querySelector("#current-weather-uv");
const currentWeatherDateEl = document.querySelector("#current-weather-date");
const currentWeatherCityEl = document.querySelector("#current-weather-city");
const currentWeatherCountryEl = document.querySelector("#current-weather-country");
const currentWeatherDescriptionEl = document.querySelector("#current-weather-description");
var submitBtn = document.querySelector("#submitBtn");
var clearBtn = document.querySelector("#clearBtn");
var previousSearchesList = document.querySelector("#previous-searches-list");
let previousSearches = [];

// Variables for API key and search history
const APIKey = "3e8f319374100581b000683f7de3cdc0";

// Remove previous data from display
function resetDisplays() {
  fiveDayForecastEl.innerHTML = " ";
  fiveDayForecastHeadingEl.text = " ";
  searchTermEl.textContent = " ";
  displayFutureWeather.innerHTML = " ";
}

// User City input 
var formSubmitHandler = function (event) {
  event.preventDefault();
  resetDisplays();
  
  var searchedCity = userInputEl.value.trim();
  if (searchedCity) {
    getCurrentWeather(searchedCity);
    getFutureWeather(searchedCity);
    savePreviousSearches(searchedCity);
  } else {
    alert("please enter a valid city");
  }
};

// If a user clicks a previous searches button...
var buttonClickHandler = function (event) {
  resetDisplay();
  var cityButton = event.target.getAttribute("data-city");

  if (cityButton) {
    getCurrentWeather(cityButton);
    getFutureWeather(cityButton);
  }
};

// Save searches to local storage
function savePreviousSearches(cityName) {
  if (!previousSearches.includes(cityName)) {
    previousSearches.push(cityName);
    var cityInput = $(`
    <button data-city="${cityName}" class="btn btn-outline-info w-100 mt-2 mb-2 list-city-item">${cityName}</button>`);
    $("#previousSearches").append(cityInput);
    localStorage.setItem("city", JSON.stringify(previousSearches));
  }
}

// Get current weather data
var getCurrentWeather = function (cityName) {
  // api link
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    cityName +
    "&units=metric" +
    "&appid=" +
    APIKey;
  // fetching api data
  fetch(apiUrl)
    .then(function (res) {
      if (res.ok) {
        return res.json().then(function (data) {
          displayCurrentWeather(data, cityName);
        });
      } else {
        alert("Error: Please enter a valid city");
      }
    })
    .catch(function (error) {
      alert("Error: ");
    });
};

// Display current weather data
var displayCurrentWeather = function (weatherData, searchTerm) {
  var currentDate = moment().format(", MMMM Do YYYY");
  searchTermEl.textContent = searchTerm + currentDate;

  // mapping weather variable to object properties
  var temp = weatherData.main.temp;
  var wind = weatherData.wind.speed;
  var humidity = weatherData.main.humidity;
  var iconCode = weatherData.weather[0].icon;
  var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";

  // creates the weather icon
  document.getElementById("weatherImage").setAttribute("src", iconUrl);

  // create
  var tempEl = document.createElement("li");
  var windEl = document.createElement("li");
  var humidityEl = document.createElement("li");

  // ammend
  tempEl.textContent = "Temp: " + temp + " °C";
  windEl.textContent = "Wind: " + wind + " MPH";
  humidityEl.textContent = "Humidity: " + humidity + " %";

  // append
  weatherInfoListEl.appendChild(tempEl);
  weatherInfoListEl.appendChild(windEl);
  weatherInfoListEl.appendChild(humidityEl);

};
// Get 5-day future forecast
function getFutureWeather(cityName) {
  var apiUrl3 =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityName +
    "&units=metric" +
    "&appid=" +
    APIKey;

  fetch(apiUrl3).then(function (res) {
    return res.json().then(function (data) {
      displayFutureWeather(data.list);
    });
  });
}

// Display 5-day future forecast
function displayFutureWeather(futureWeatherData) {
  var forecastHeading = $(
    `<h3 class="text-center five-day-forecast-card" >5-Day Forecast<h3/>`
  );
  $("#fiveDayForecastHeading").append(forecastHeading);

  for (let i = 1; i < futureWeatherData.length; i += 8) {
    var unixFormat = moment.unix(futureWeatherData[i].dt).format("MMM Do YYYY");
    var futureCityData = {
      date: unixFormat,
      icon: futureWeatherData[i].weather[0].icon,
      maxTemp: futureWeatherData[i].main.temp_max,
      minTemp: futureWeatherData[i].main.temp_min,
      wind: futureWeatherData[i].wind.speed,
      humidity: futureWeatherData[i].main.humidity,
    };

    var iconUrl =
      "https://openweathermap.org/img/w/" + futureCityData.icon + ".png";

    // create / ammend

    var futureCard = $(`
      <div class="col-sm-12 col-lg-9  d-flex flex-column d-flex align-items-stretch flex-wrap five-day-card">
        <h5>${futureCityData.date}</h5>
        <div id="icon"><img id="weatherImage" src="${iconUrl}" alt="" /></div>
        <p>Max Temp:  ${futureCityData.maxTemp}  °C</p>
        <p>Min Temp: ${futureCityData.minTemp}  °C</p>
        <p>Wind: ${futureCityData.wind} MPH</p>
        <p>Humidity: ${futureCityData.humidity} %</p>
      <div>`);

    // append
    $("#fiveDayForecast").append(futureCard);
  }
}

// 'Search city' button event listener
searchFormEl.addEventListener("submit", formSubmitHandler);

// Get data from local storage
getLocalStorage();

// Create button elements from local storage data
function getLocalStorage() {
  if (localStorage.getItem("city")) {
    previousSearches = JSON.parse(localStorage.getItem("city"));

    for (var i = 0; i < previousSearches.length; i++) {
      var cityName = previousSearches[i];
      var cityInput = $(`
    <button data-city="${cityName}" class="btn btn-outline-info w-100 mt-2 mb-2 list-city-item">${cityName}</button>`);
      $("#previousSearches").append(cityInput);
    }
    // Display the last searched city on screen
    getCurrentWeather(previousSearches[previousSearches.length - 1]);
    getFutureWeather(previousSearches[previousSearches.length - 1]);
  }
}