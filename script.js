async function fetchWeatherData(cityName) {
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=06c7dac1b62e25771846de6c744f0db1`;
    const response = await fetch(url)
    const data = await response.json();
    let city = document.getElementById("city");
    city.innerHTML = data.name;
    let windSpeed = document.getElementById("wind_speed");
    windSpeed.innerHTML =data.wind.speed + "km/hr";
    let humidity = document.getElementById("humidity");
    humidity.innerHTML = data.main.humidity+ "g/kg";
    let temp = document.getElementById("temp");
    temp.innerHTML = Math.round((data.main.temp)-273.15)+"℃";
    console.log(data);
}
function fetchCity() {
    let cityName = document.getElementById("city_name");
    if(cityName.value==="")
     {
        alert("Enter a City Name");
    } else{
        fetchWeatherData(cityName.value);
          cityName.value="";
        }
    }
