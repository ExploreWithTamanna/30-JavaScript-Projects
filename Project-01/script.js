const apiKey = "f51c600c0a7f9c878a4a1c4ed53be15e";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".details").style.display = "none";
  }else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =(data.wind.speed * 3.6).toFixed(2) + "km/h";
    document.querySelector(".icon-name").innerHTML = data.weather[0].main;
   
  
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "https://i.postimg.cc/LXTH5xrW/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "https://i.postimg.cc/nhCbYRB7/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "https://i.postimg.cc/zGTzgDh6/rain.png";
  }
  else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "https://i.postimg.cc/PxBBtYq7/drizzle.png";
  }
  else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "https://i.postimg.cc/Wz4LYThN/mist.png";
  }
  else if(data.weather[0].main == "Snow"){
    weatherIcon.src = "https://i.postimg.cc/kMwf7Whh/snow.png";
  }
  else if(data.weather[0].main == "Thunderstorm"){
    weatherIcon.src = "https://i.postimg.cc/0jD5D5gj/thunderstorm.png";
  }
  
  
  document.querySelector(".weather").style.display = "flex";
  document.querySelector(".details").style.display = "flex";
  document.querySelector(".error").style.display = "none";

  } 
  
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
