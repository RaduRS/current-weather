
function getDegrees() {
    var cityName = document.getElementById('name').value;
    // document.getElementById('text').innerHTML = cityName;
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
    .then(response => response.json())
    .then(result => 
        {document.getElementById('text').innerHTML = result.name + ", " + result.sys.country;
        document.getElementById('degrees').innerHTML =  
        (result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML;
        document.getElementById('main').innerHTML = result.weather[0].main;
        document.getElementById('degrees').style.opacity = 1;
        document.getElementById('text').style.opacity =1;
        document.getElementById('main').style.opacity =1;
        // Math.round(result.main.temp * 0.1)
}
)
  }


  document.getElementById('name').addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    var cityName = document.getElementById('name').value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c7c0bbfad9af091a116987cdc3cde6e5`)
   .then(response => response.json())
   .then(result => 
       {document.getElementById('text').innerHTML = result.name + ", " + result.sys.country;
       document.getElementById('degrees').innerHTML =  
       (result.main.temp - 273.15).toFixed(1) + document.getElementById('celsius').innerHTML;
       document.getElementById('main').innerHTML = result.weather[0].main;
       document.getElementById('degrees').style.opacity = 1;
       document.getElementById('text').style.opacity =1;
       document.getElementById('main').style.opacity =1;
       // Math.round(result.main.temp * 0.1)
}
)
  }
});







