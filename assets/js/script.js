
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}'
}
fetch(requestUrl)
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data)
    })



    // brings the saved text back from local storage into the designated row
    $('#city-1 .description').val(localStorage.getItem('city-1'));
    $('#city-2 .description').val(localStorage.getItem('city-2'));
    $('#city-3 .description').val(localStorage.getItem('city-3'));
    $('#city-4 .description').val(localStorage.getItem('city-4'));
    $('#city-5 .description').val(localStorage.getItem('city-5'));
    $('#city-6 .description').val(localStorage.getItem('city-6'));
    $('#city-7 .description').val(localStorage.getItem('city-7'));
    $('#city-8 .description').val(localStorage.getItem('city-8'));
    