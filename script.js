function getDegrees() {
    var cityName = document.getElementById('name').value;
 
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response =>
      {
        if (!response.ok) {
          alert('Please type the name of a real city');
          throw new Error('Please type the name of a real city');
        }
        return response.json();
      })
    .then(result => 
        {$('#text').html(result.name + ", " + result.sys.country);
        $('#degrees').html((result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML);

        $('#degrees').css({opacity: 1});
        $('#text').css({opacity: 1});
        $('#main').css({opacity: 1});

        $('#weatherIcon').css({opacity: 1});
        $('#feels').css({opacity: 1});
        $('#humidity').css({opacity: 1});
        $('#wind').css({opacity: 1});
        $('#min').css({opacity: 1});
        $('#max').css({opacity: 1});
        $('#group').css({opacity: 1});

        // Math.round(result.main.temp * 0.1)

        if(result.weather[0].main === 'Clouds'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
        else if(result.weather[0].main === 'Clear'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
        }
        else if(result.weather[0].main === 'Rain'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
        }
        else if(result.weather[0].main === 'Snow'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('snowflake').innerHTML + result.weather[0].main
        } else {
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-showers-heavy').innerHTML + result.weather[0].main
        } 

        $('#feels').html('Feels like: ' + (result.main.feels_like - 273.15).toFixed(1) + ' °C');
        $('#humidity').html('Humidity: ' + result.main.humidity + "%");
        $('#wind').html('Wind: ' + (result.wind.speed * 3.6).toFixed(0) + ' km/h');


        var long = result.coord.lon;
        var lat = result.coord.lat;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
        .then(response => response.json())
        .then(result => {
          $('#min').html(document.getElementById('minImg').innerHTML + (result.daily[0].temp.min - 273.15).toFixed(1) + ' °C');
          $('#max').html(document.getElementById('maxImg').innerHTML + (result.daily[0].temp.max - 273.15).toFixed(1) + ' °C')
        })
}
)
  }


    document.getElementById('name').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      var cityName = document.getElementById('name').value;
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response =>
      {
        if (!response.ok) {
          alert('Please type the name of a real city');
          throw new Error('Please type the name of a real city');
        }
        return response.json();
      })
    .then(result => 
          {$('#text').html(result.name + ", " + result.sys.country);
          $('#degrees').html((result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML);

          $('#degrees').css({opacity: 1});
          $('#text').css({opacity: 1});
          $('#main').css({opacity: 1});
          $('#feels').css({opacity: 1});
          $('#humidity').css({opacity: 1});
          $('#wind').css({opacity: 1});
          $('#min').css({opacity: 1});
          $('#max').css({opacity: 1});
          $('#group').css({opacity: 1});

          $('#weatherIcon').css({opacity: 1});

          if(result.weather[0].main === 'Clouds'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
          } 
          else if(result.weather[0].main === 'Clear'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
          }
          else if(result.weather[0].main === 'Rain'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
          }
          else if(result.weather[0].main === 'Snow'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('snowflake').innerHTML + result.weather[0].main
          } else {
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-showers-heavy').innerHTML + result.weather[0].main
          }


          $('#feels').html('Feels like: ' + (result.main.feels_like - 273.15).toFixed(1) + ' °C');
          $('#humidity').html('Humidity: ' + result.main.humidity + "%");
          $('#wind').html('Wind: ' + (result.wind.speed * 3.6).toFixed(0) + ' km/h');

          var long = result.coord.lon;
          var lat = result.coord.lat;
  
          fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
          .then(response => response.json())
          .then(result => {
            $('#min').html(document.getElementById('minImg').innerHTML + (result.daily[0].temp.min - 273.15).toFixed(1) + ' °C');
            $('#max').html(document.getElementById('maxImg').innerHTML + (result.daily[0].temp.max - 273.15).toFixed(1) + ' °C')
          })
      }
  )
    }

  });

function findMe(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
  } 
  //Get latitude and longitude;
  function successFunction(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    console.log(lat);
    console.log(long);
    

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response =>
      {
        if (!response.ok) {
          alert('Please type the name of a real city');
          throw new Error('Please type the name of a real city');
        }
        return response.json();
      })
    .then(result =>  
      
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${result.name}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response => response.json())
    .then(result => 
        {$('#text').html(result.name + ", " + result.sys.country);
        $('#degrees').html((result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML);
  
        $('#degrees').css({opacity: 1});
        $('#text').css({opacity: 1});
        $('#main').css({opacity: 1});
        $('#feels').css({opacity: 1});
        $('#humidity').css({opacity: 1});
        $('#wind').css({opacity: 1});
        $('#min').css({opacity: 1});
        $('#max').css({opacity: 1});
        $('#group').css({opacity: 1});
  
        $('#weatherIcon').css({opacity: 1});
  
        if(result.weather[0].main === 'Clouds'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
        else if(result.weather[0].main === 'Clear'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
        }
        else if(result.weather[0].main === 'Rain'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
        } 
        else if(result.weather[0].main === 'Snow'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('snowflake').innerHTML + result.weather[0].main
        } 
        else {
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-showers-heavy').innerHTML + result.weather[0].main
        } 


        $('#feels').html('Feels like: ' + (result.main.feels_like - 273.15).toFixed(1) + ' °C');
        $('#humidity').html('Humidity: ' + result.main.humidity + "%");
        $('#wind').html('Wind: ' + (result.wind.speed * 3.6).toFixed(0) + ' km/h');


        var long = result.coord.lon;
        var lat = result.coord.lat;

        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
        .then(response => response.json())
        .then(result => {
          $('#min').html(document.getElementById('minImg').innerHTML + (result.daily[0].temp.min - 273.15).toFixed(1) + ' °C');
          $('#max').html(document.getElementById('maxImg').innerHTML + (result.daily[0].temp.max - 273.15).toFixed(1) + ' °C')
        })
  }
  )

    );
  }
  
  function errorFunction(){
    alert("Couldn't connect to your location");
  }

}











