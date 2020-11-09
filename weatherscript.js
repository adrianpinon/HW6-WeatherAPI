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
let keyCount = 0;
searchButton.click(function () {

    let searchInput = $(".searchInput").val();
    
    let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + apiKey + "&units=imperial";
    if (searchInput == "") {
        console.log(searchInput);
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then(function (response) {
            // list-group append an li to it with just set text
            // console.log(response.name);
            let cityName = $(".list-group").addClass("list-group-item");
            cityName.append("<ul>" + response.name + "</ul>");
            // Local storage
            let local = localStorage.setItem(keyCount, response.name);
            keyCount = keyCount + 1;


