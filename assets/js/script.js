var cityNameEl = document.getElementById("cityName");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvIndex = document.getElementById("uvIndex");
var forecast = document.getElementById("forecast");
var city = document.getElementById("city");
var pic = document.getElementById("pic");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
var cityName = cityName;


// assigning a unique API to a variable
const apiKey = "1ad4965b69077cc77a3ec509434002cd";

// returns the requested
function renderItems(city, data) {
    renderCurrentWeather(city, data.current, data.timezone);
    renderForecast(data.daily, data.timezone);
}

// fetching lat and lon for city search
function getLatLon(location) {
    var { lat, lon } = location;
    var city = location.name;
    console.log('getLatLon fired!', '#userInput');
    var latLonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}`;

    fetch(latLonUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            renderItems(city, data);
            console.log(data);
        })
}

// fetching current weather based on user input
var searchInput = document.querySelector("#userInput");
var search = searchInput.value.trim();

function getApi(search) {
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            appendToHistory(search);
            getLatLon(data[0]);
            console.log(data)
        })
}

// fetching the weather image





//function savesearchHistory(searchHistory) {
    //var value = $(this).siblings("#city").value;

    //localStorage.setItem(cityName, value);
//}

$('.searchBtn').on('click', getApi);

// brings the saved text back from local storage into the html designated row
    // $('#city-1').val(localStorage.getItem('city-1'));
    // $('#city-2').val(localStorage.getItem('city-2'));
    // $('#city-3').val(localStorage.getItem('city-3'));
    // $('#city-4').val(localStorage.getItem('city-4'));
    // $('#city-5').val(localStorage.getItem('city-5'));
    // $('#city-6').val(localStorage.getItem('city-6'));
    // $('#city-7').val(localStorage.getItem('city-7'));
    // $('#city-8').val(localStorage.getItem('city-8'));
    