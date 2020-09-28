const apiKey = "547f0fe4775c1cb25084ca3643c1bc25"

function seachWeather(city) {
    
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=imperial&appid="+apiKey
    
    // creating AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);
        console.log(response);
        
        var card = `
        <div class="card" style="width: 18rem;">
        <h1>Current Weather: ${response.name}</h1>
        <div class="card-body">
            <p>Temperature: ${response.main.temp}</p>
            <p>Humidity: ${response.main.humidity}</p>
            <p>Wind Speed: ${response.wind.speed}</p>
            <p>UV Index: ${response.weather[0].description}</p>
        </div>
        </div>
        
        `
        $('#weather-view').html(card);
        
    });
}



function seachWeather2(city) {
    
    let queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+apiKey
    
    
    // creating AJAX call
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL2);
        console.log(response);
        
        var card = `
        <div class="card" style="width: 18rem;">
        <h1>Forecast: ${response.city.name}</h1>
        <div class="card-body">
            <h2>Temperature: </h2>
            <h3>Day 1: </h3>
            <p> ${response.list[0].dt_txt} </p>
            <p> ${response.list[0].main.temp} degrees Fahrenheit </p>
            <p> Humidity: ${response.list[0].main.humidity} </p>
            <h3>Day 2: </h3>
            <p> ${response.list[7].dt_txt} </p>
            <p> ${response.list[7].main.temp} degrees Fahrenheit</h3>
            <p> Humidity: ${response.list[7].main.humidity} </p>
            <h3>Day 3: </h3>
            <p> ${response.list[15].dt_txt} </p>
            <p> ${response.list[15].main.temp} degrees Fahrenheit</h3>
            <p> Humidity: ${response.list[15].main.humidity} </p>
            <h3>Day 4: </h3>
            <p> ${response.list[23].dt_txt} </p>
            <p> ${response.list[23].main.temp} degrees Fahrenheit</h3>
            <p> Humidity: ${response.list[23].main.humidity} </p>
            <h3>Day 5: </h3>
            <p> ${response.list[31].dt_txt} </p>
            <p> ${response.list[31].main.temp} degrees Fahrenheit</h3>
            <p> Humidity: ${response.list[31].main.humidity} </p>
        </div>
        </div>
        
        `
        $('#weather-forecast').html(card);
        
    });
}


    $("#find-city").on("click", function(event) {
        
        event.preventDefault();
        
        let cityName = $("#city-input").val();
        
        seachWeather(cityName);
        
    });

    $("#find-city").on("click", function(event) {
        
        event.preventDefault();
        
        let cityName2 = $("#city-input").val();
        
        seachWeather2(cityName2);
        
    });




var searchInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#find-city");
var searchHistory = document.querySelector("#search-history");


    renderLastSearched();
    
    function displayMessage(type, message) {
        searchHistory.textContent = message;
        searchHistory.setAttribute("class", type);
    }


    function renderLastSearched() {
        var search = localStorage.getItem("city-input");

        if (!search) {
            return;
        }

        searchInput.textContent = search;
    }
    
    
    searchBtn.addEventListener("click", function(event) {
        event.preventDefault();
        
        var search = document.querySelector("#city-input").value;
        
        if (search === "") {
            displayMessage("error", "search cannot be blank");
        } else {
            displayMessage("success", card);
            
            localStorage.setItem("search", search);


            var card = `
            <div class="card" style="width: 18rem;">
            <h1>Search History: </h1>
            <div class="card-body">
                <p>Cities: ${search} </p>
            </div>
            </div>
        
            `
            $('#search-history').html(card);
        }

    });

