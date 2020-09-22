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
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
            <p>Day 1: ${response.list[0].main.temp}
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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