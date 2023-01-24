
// GLOBAL VARIABLES
var apiKey = 'b1e116f4023797b243caec34eaa26f25';
const searchBtn = $('#searchBtn');


// get city from input city search
searchBtn.on("click", function () {
    const citySearch = $('#search-city').val();
    console.log(citySearch);
});


// create function to fetch weather dashboard api
/* function getApi() {
    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=' + apiKey;
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
        })    
} */