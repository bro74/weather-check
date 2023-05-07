var APIKey= "43b6171e5206fe7a36d0cfb460f4f324";

//GLobal varaible list 
var cityName= document.querySelector("#search-result-name");
var temp = document.querySelector("#temp");
var humidity= document.querySelector("#humidity");
var wind = document.querySelector("#wind");
var forecastCityName= document.querySelector("#forecast-city-name");
var dayOneDate= document.querySelector("#dayOneDate");
var dayTwoDate=document.querySelector("#dayTwoDate");
var dayThreeDate=document.querySelector("#dayThreeDate");
var dayFourDate= document.querySelector("#dayFourDate");
var dayFiveDate= document.querySelector("#dayFiveDate");
var dayOneTemp= document.querySelector("#dayOneTemp");
var dayTwoTemp= document.querySelector("#dayTwoTemp");
var dayThreeTemp= document.querySelector("#dayThreeTemp");
var dayFourTemp= document.querySelector("#dayFourTemp");
var dayFiveTemp= document.querySelector("#dayFiveTemp");
var dayOneHumidity= document.querySelector("#dayOneHumidity");
var dayTwoHumidity=document.querySelector("#dayTwoHumidity");
var dayThreeHumidity=document.querySelector("#dayThreeHumidity");
var dayFourHumidity= document.querySelector("#dayFourHumidity");
var dayFiveHumidity= document.querySelector("#dayFiveHumidity");
var dayOneWind= document.querySelector("#dayOneWind");
var dayTwoWind=document.querySelector("#dayTwoWind");
var dayThreeWind=document.querySelector("#dayThreeWind");
var dayFourWind=document.querySelector("#dayFourWind");
var dayFiveWind=document.querySelector("#dayFiveWind");

var buttonList= document.querySelector(".savedButtons");

//Variable for search button element
var searchButton = document.querySelector(".btn");
//Variable for search name input
var searchName = document.querySelector("#inputCityName2");

//Function that runs once fetch request is called upon click, adds text content for weather conditions
function forecast (data) {
  //variable.property = string + parameter.infostat.infostat
  cityName.textContent= "Today's Weather In: " + data.city.name;
  //variable.property = string + prameter.infoarray.info.info + string
  temp.textContent= "Temp: " + data.list[0].main.temp + " °F";
  wind.textContent= "Wind: " + data.list[0].wind.speed + " MPH";
  humidity.textContent="Humidity: " + data.list[0].main.humidity + "%";
 
   //creates img by using method and assigng it to varaible
   var iconOne = document.createElement("img"); 
   //src is URL that contains weather icon found thru API
   iconOne.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png");
   cityName.appendChild(iconOne); //attaches img element
 
   //retrive weather data from API and repeat
  dayOneDate.textContent= data.list[3].dt_txt.slice(0, 11);
  dayOneTemp.textContent= "Temp: " + data.list[3].main.temp+ " °F";
  dayOneWind.textContent= "Wind: " + data.list[3].wind.speed + " MPH";
  dayOneHumidity.textContent= "Humidity: " + data.list[3].main.humidity + "%";
 
  var iconTwo= document.createElement("img");
  iconTwo.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png");
  dayOneDate.appendChild(iconTwo);
 
  dayTwoDate.textContent= data.list[11].dt_txt.slice(0, 11);
  dayTwoTemp.textContent= "Temp: " + data.list[11].main.temp+ " °F";
  dayTwoWind.textContent= "Wind: " + data.list[11].wind.speed + " MPH";
  dayTwoHumidity.textContent= "Humidity: " + data.list[11].main.humidity + "%";
 
  var iconThree= document.createElement("img");
  iconThree.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + "@2x.png");
  dayTwoDate.appendChild(iconThree);
 
  dayThreeDate.textContent= data.list[19].dt_txt.slice(0, 11);
  dayThreeTemp.textContent= "Temp: " + data.list[19].main.temp+ " °F";
  dayThreeWind.textContent= "Wind: " + data.list[19].wind.speed + " MPH";
  dayThreeHumidity.textContent= "Humidity: " + data.list[19].main.humidity + "%";
 
  var iconFour= document.createElement("img");
  iconFour.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + "@2x.png");
  dayThreeDate.appendChild(iconFour);
 
  dayFourDate.textContent= data.list[27].dt_txt.slice(0, 11);
  dayFourTemp.textContent= "Temp: " + data.list[27].main.temp+ " °F";
  dayFourWind.textContent= "Wind: " + data.list[27].wind.speed + " MPH";
  dayFourHumidity.textContent= "Humidity: " + data.list[27].main.humidity + "%";
 
  var iconFive= document.createElement("img");
  iconFive.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + "@2x.png");
  dayFourDate.appendChild(iconFive);
 
  dayFiveDate.textContent= data.list[35].dt_txt.slice(0, 11);
  dayFiveTemp.textContent= "Temp: " + data.list[35].main.temp+ " °F";
  dayFiveWind.textContent= "Wind: " + data.list[35].wind.speed + " MPH";
  dayFiveHumidity.textContent= "Humidity: " + data.list[35].main.humidity + "%";
 
  var iconSix= document.createElement("img");
  iconSix.setAttribute("src", "https://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + "@2x.png");
  dayFiveDate.appendChild(iconSix);
 
 // show for confirmation
  console.log(data)
   
 
 };
 //Get weather function with Function with fetch request to API
function getWeather (city) {
  fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=0ca98b6a40434df572129e17e48d6ead&units=imperial").then(function(response){
    return response.json()
  }).then(function(data){
    forecast(data);
  });
};

