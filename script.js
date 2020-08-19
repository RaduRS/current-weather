function getDegrees() {
    var cityName = document.getElementById('name').value;
 
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
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

        // Math.round(result.main.temp * 0.1)

        if(result.weather[0].main === 'Clouds'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
        else if(result.weather[0].main === 'Clear'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
        }
        else if(result.weather[0].main === 'Rain'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
        } else {
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
}
)
  }


    document.getElementById('name').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      var cityName = document.getElementById('name').value;
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
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

          if(result.weather[0].main === 'Clouds'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
          } 
          else if(result.weather[0].main === 'Clear'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
          }
          else if(result.weather[0].main === 'Rain'){
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
          } else {
            document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
          }
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
  
    fetch(`http://www.mapquestapi.com/geocoding/v1/reverse?key=wm1hiYIIs24GtbqO0p4QSl8MufOIBPDe&location=${lat},${long}`)
    .then(response =>
      {
        if (!response.ok) {
          alert('Please type the name of a real city');
          throw new Error('Please type the name of a real city');
        }
        return response.json();
      })
    .then(result =>  
      
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${result.results[0].locations[0].adminArea5}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response => response.json())
    .then(result => 
        {$('#text').html(result.name + ", " + result.sys.country);
        $('#degrees').html((result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML);
  
        $('#degrees').css({opacity: 1});
        $('#text').css({opacity: 1});
        $('#main').css({opacity: 1});
  
        $('#weatherIcon').css({opacity: 1});
  
        if(result.weather[0].main === 'Clouds'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
        else if(result.weather[0].main === 'Clear'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('sun').innerHTML + result.weather[0].main
        }
        else if(result.weather[0].main === 'Rain'){
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud-rain').innerHTML + result.weather[0].main
        } else {
          document.getElementById('weatherIcon').innerHTML = document.getElementById('cloud').innerHTML + result.weather[0].main
        } 
  }
  )

    );
  }
  
  function errorFunction(){
    alert("Couldn't connect to your location");
  }

}











