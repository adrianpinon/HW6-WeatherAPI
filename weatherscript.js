//function weathDash() {}
    //let inputEl = document.getElementById("city");
    //let searchEl = document.getElementById("search-button");
    //let nameEl = document.getElementById("city-name");
   
    
    let searchButton = $(".searchButton")
    let APIkey = "0b5b1a641aebdb629546fd9176f0f37f";

    //function getWeather(cityName) {
    
         //let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
   
//weathDash();

for (let i = 0; i < localStorage.length; i++) {

    let city = localStorage.getItem(i);
        console.log(localStorage.getItem("City"));
    let cityName = $(".list-group")
    cityName.append(`<ul>${city}</ul>`);
}