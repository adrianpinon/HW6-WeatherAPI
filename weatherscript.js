//function weathDash() {}
//let inputEl = document.getElementById("city");
//let searchEl = document.getElementById("search-button");
//let nameEl = document.getElementById("city-name");


let searchButton = $(".searchButton")
let APIkey = "0b5b1a641aebdb629546fd9176f0f37f";

//function getWeather(cityName) {
//let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIkey;

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
let urlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + APIkey + "&units=imperial";
let urlFiveDay = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput + "&Appid=" + APIkey + "&units=imperial";
    

    if (searchInput == "") {
        console.log(searchInput);
    } else {
        $.ajax({
            url: urlCurrent,
            method: "GET"
        }).then((response) => {
                // list-group append an li to it with just set text
                console.log(response.name);
                let cityName = $(".list-group").addClass("list-group-item");
                    cityName.append("<ul>" + response.name + "</ul>");
                // Local storage
                    localStorage.setItem(keyCount, response.name);
                    keyCount = keyCount + 1;
                // Current Weather append 
                let currentCard = $(".currentCard").append("<div>");
                    currentCard.empty();
                let currentName = currentCard.append("<p>");
                    currentCard.append(currentName);

                // Adjust the Date 
                let timeUTC = new Date(response.dt * 1000);
                    currentName.append(response.name + " " + timeUTC.toLocaleDateString("en-US"));
                    currentName.append(`<img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">`);
                //Temperature
                let currentTemp = currentName.append("<p>");
                    currentName.append(currentTemp);
                    currentTemp.append("<p>" + "Temperature: " + response.main.temp + "</p>");
                // Add Humidity
                    currentTemp.append("<p>" + "Humidity: " + response.main.humidity + "%" + "</p>");
                // // Add Wind Speed
                    currentTemp.append("<p>" + "Wind Speed: " + response.wind.speed + "</p>");

                // UV Index URL
                let urlUV = `https://api.openweathermap.org/data/2.5/uvi?appid=b8ecb570e32c2e5042581abd004b71bb&lat=${response.coord.lat}&lon=${response.coord.lon}`;

                // UV Index
                $.ajax({
                    url: urlUV,
                    method: "GET"
                }).then((response) => {
                    let currentUV = currentTemp.append("<p>" + "UV Index: " + response.value + "</p>").addClass("card-text");
                        currentUV.addClass("UV");
                        currentTemp.append(currentUV);
                });
            });
        // Start call for 5-day forecast 
        $.ajax({
            url: urlFiveDay,
            method: "GET"
        }).then((response) => {
                // Array for 5-days 
                let day = [0, 8, 16, 24, 32];
                let fiveDayCard = $(".fiveDayCard").addClass("card-body");
                    fiveDayCard.empty();
                let fiveDayDiv = $(".fiveDayOne").addClass("card-text");
                    fiveDayDiv.empty();
                // For each for 5 days. Converted to arrow function
                day.forEach(([i]) => {
                    let FiveDayTimeUTC1 = new Date(response.list[i].dt * 1000);
                        FiveDayTimeUTC1 = FiveDayTimeUTC1.toLocaleDateString("en-US");
                        fiveDayDiv.append(`<div class=fiveDayColor><p>${FiveDayTimeUTC1}</p>${`<img src="https://openweathermap.org/img/wn/${response.list[i].weather[0].icon}@2x.png">`}<p>Temperature: ${response.list[i].main.temp}</p><p>Humidity: ${response.list[i].main.humidity}%</p></div>`);


                });

            });
    }
});

