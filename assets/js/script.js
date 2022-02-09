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
function renderItems(cityCard, data) {
    renderCurrentWeather(cityCard, data.current, data.timezone);
    renderForecast(data.daily, data.timezone);
}

// fetching current weather based on user input
var searchInput = document.querySelector("#userInput");
var search;

function handleSubmit(event) {
    event.preventDefault()
    search = searchInput.value.trim();
    searchInput.value = "";
    getApi(search);
}

 // console.log(search);
function getApi(search) {
    var requestUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${apiKey}`;
    console.log(requestUrl);

    fetch(requestUrl)
        .then(function (response){
            return response.json();
        })
        .then(function (data){
            //appendToHistory(search);
            getLatLon(data[0]);
        })
}

// fetching weather using lat and lon for city search
function getLatLon(location) {
    var { lat, lon } = location;
    var city = location.name;
    console.log('getLatLon fired!', '#userInput');
    var latLonUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=${apiKey}`;
    var temp = getElementById("#temp");
    var wind = getElementById("#wind");
    var humidity = getElementById("#humidity");
    var uvIndex = getElementById("#uvIndex");
    var pic = getElementById("pic");
    

    fetch(latLonUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // renderItems(cityCard, data);
            const currentDate = new DataTransfer(response.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth() +1;
            const year = currentDate.getFullYear();
            let weatherPic = response.data.weather[0].icon;
            cityNameEl.innerHTML = response.data.name + "(" + month + "/" + day + "/" + year + ")";
            pic.setAttribute
            console.log(data);
        })
}




// append to history
function appendToHistory(searchHistory) {
    var value = $(this).siblings("#city").value;

    localStorage.setItem(cityName, value);
}

$('.searchBtn').on('click', handleSubmit);
    