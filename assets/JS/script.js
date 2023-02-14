
// GLOBAL VARIABLES
var apiKey = 'b1e116f4023797b243caec34eaa26f25';
const searchBtn = $('#searchBtn');
let degreesSym = '\u00B0';
const citySearch = $('#search-city');

// TODAYS WEATHER VARIABLES
const currentContain = $('#todays-weather');
const currentDay = $('#name-date');
const currentTemp = $('#today-temp');
const currentWind = $('#today-wind');
const currentHumid = $('#today-hum');
let date = dayjs().format('MMM D, YYYY');

// FIVE DAY VARIABLES
// DAY ONE
const dayOneDate = $('#day-1-date');
const dayOneTemp = $('#day-1-temp');
const dayOneWind = $('#day-1-wind');
const dayOneHum = $('#day-1-hum');

// DAY TWO
const dayTwoDate = $('#day-2-date');
const dayTwoTemp = $('#day-2-temp');
const dayTwoWind = $('#day-2-wind');
const dayTwoHum = $('#day-2-hum');

// DAY THREE
const dayThreeDate = $('#day-3-date');
const dayThreeTemp = $('#day-3-temp');
const dayThreeWind = $('#day-3-wind');
const dayThreeHum = $('#day-3-hum');

// DAY FOUR
const dayFourDate = $('#day-4-date');
const dayFourTemp = $('#day-4-temp');
const dayFourWind = $('#day-4-wind');
const dayFourHum = $('#day-4-hum');

// DAY 5
const dayFiveDate = $('#day-5-date');
const dayFiveTemp = $('#day-5-temp');
const dayFiveWind = $('#day-5-wind');
const dayFiveHum = $('#day-5-hum');

// CLICK EVENT TO SEARCH CITY AND FETCH API
searchBtn.on("click", getApi);

// FUNCTION RAN WHEN CLICKED
// FUNCTION TO GET USER CITY INPUT THEN ADD IT TO THE API URL
// FUNCTION THEN FETCHES CURRENT WEATHER API AND RETURNS DATA (TEMPERATURE, WIND AND HUMIDITY) FOR CURRENT DATE TO THE SCREEN
// ADDS fiveDay FUNCTION TO RENDER ON CLICK
function getApi(e) {
    e.preventDefault();

    let requestURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch.val() + '&appid=' + apiKey + '&units=imperial';
    fetch(requestURL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // GETTING CURRENT WEATHER DATA AND RENDERING IT TO HTML
            currentDay.text(`${data.name}: ${date}`)
            currentTemp.text(`Temperature: ${data.main.temp} ${degreesSym}F`);
            currentWind.text(`Wind: ${data.wind.speed} mph`);
            currentHumid.text(`Humidity: ${data.main.humidity}%`);

        });

        fiveDay();
} 

// FUNCTION FOR FIVE DAY FORECAST
function fiveDay() {
    // const citySearch = $('#search-city').val();
    // API TO GET 5 DAY FORECAST FOR CITY
    let fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch.val() + '&appid=' + apiKey + '&units=imperial';
        
    fetch(fiveDayURL)
        .then(res => {
            return res.json();
        })
        .then(data => {
            // GETTING WEATHER DATA FOR NEXT 5 DAYS AND RENDERING IT TO HTML
            // DAY ONE
            dayOneDate.text(`${data.list[0].dt_txt}`);
            dayOneTemp.text(`Temp: ${data.list[0].main.temp} ${degreesSym}F`);
            dayOneWind.text(`Wind: ${data.list[0].wind.speed} MPH`);
            dayOneHum.text(`Humidity: ${data.list[0].main.humidity}%`);

            // DAY TWO
            dayTwoDate.text(`${data.list[10].dt_txt}`);
            dayTwoTemp.text(`Temp: ${data.list[10].main.temp} ${degreesSym}F`);
            dayTwoWind.text(`Wind: ${data.list[10].wind.speed} MPH`);
            dayTwoHum.text(`Humidity: ${data.list[10].main.humidity}%`);

            // DAY THREE
            dayThreeDate.text(`${data.list[20].dt_txt}`);
            dayThreeTemp.text(`Temp: ${data.list[20].main.temp} ${degreesSym}F`);
            dayThreeWind.text(`Wind: ${data.list[20].wind.speed} MPH`);
            dayThreeHum.text(`Humidity: ${data.list[20].main.humidity}%`);

            // DAY FOUR
            dayFourDate.text(`${data.list[30].dt_txt}`);
            dayFourTemp.text(`Temp: ${data.list[30].main.temp} ${degreesSym}F`);
            dayFourWind.text(`Wind: ${data.list[30].wind.speed} MPH`);
            dayFourHum.text(`Humidity: ${data.list[30].main.humidity}%`);
            
            // DAY FIVE
            dayFiveDate.text(`${data.list[39].dt_txt}`);
            dayFiveTemp.text(`Temp: ${data.list[39].main.temp} ${degreesSym}F`);
            dayFiveWind.text(`Wind: ${data.list[39].wind.speed} MPH`);
            dayFiveHum.text(`Humidity: ${data.list[39].main.humidity}%`)
        })
}




