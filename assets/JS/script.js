
// GLOBAL VARIABLES
var apiKey = 'b1e116f4023797b243caec34eaa26f25';
const searchBtn = $('#searchBtn');
let degreesSym = '\u00B0';

// TODAYS WEATHER VARIABLES
const currentContain = $('#todays-weather');
const currentDay = $('#name-date');
const currentTemp = $('#today-temp');
const currentWind = $('#today-wind');
const currentHumid = $('#today-hum');
let date = dayjs().format('MMM D, YYYY');

// FIVE DAY VARIABLES


// CLICK EVENT TO SEARCH CITY AND FETCH API
searchBtn.on("click", getApi);

// FUNCTION RAN WHEN CLICKED
// FUNCTION TO GET USER CITY INPUT THEN ADD IT TO THE API URL
// FUNCTION THEN FETCHES URL AND RETURNS DATA (TEMPERATURE, WIND AND HUMIDITY) FOR CURRENT DATE TO THE SCREEN
function getApi() {
    const citySearch = $('#search-city').val();

    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=' + apiKey + '&units=imperial';
    fetch(requestURL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // console logging data from url
            console.log(data);
            // getting TODAYS WEATHER data and rendering it to page
            currentDay.text(`${data.name}: ${date}`)
            currentTemp.text(`Temperature: ${data.main.temp} ${degreesSym}F`);
            currentWind.text(`Wind: ${data.wind.speed} mph`);
            currentHumid.text(`Humidity: ${data.main.humidity}%`);
        });
} 

// FUNCTION FOR FIVE DAY FORECAST
function fiveDay() {

}