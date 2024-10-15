let searchbtn = document.getElementById("searchbtn");
let input = document.getElementById("searchBar");
let image = document.getElementById("weatherimg");
let temperature = document.getElementById("idtemp");
let Status = document.getElementById("idstatus");
let humidity = document.getElementById("idhumidityPer");
let wind = document.getElementById("idspeed");
let content = document.querySelector(".content")
let content2 = document.querySelector(".content2")

async function checkWeather(cityName) {
    let apiKey = "e8305f702c30f8d6161f533b8706b2c5"
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

    let fetchAPI = await fetch(apiURL);
    let jsonFormat = await fetchAPI.json();

    if (jsonFormat.cod === `404`) {
        image.src = "./imgs/404.png";
        searchbtn.style.display = "none";
        input.style.display = "none";
        content.style.display = "none";
        content2.style.display = "none";
        temperature.innerHTML = "Error found"
        Status.innerHTML = "NO CITY OF SUCH NAME"
        Status.style.color = "black"
        document.querySelector(".drop").style.display = "none";
        document.querySelector(".wind").style.display = "none";
        return;
    }

    temperature.innerHTML = `${Math.round(jsonFormat.main.temp - 273.15)}°C`
    Status.innerHTML = jsonFormat.weather[0].main;
    humidity.innerHTML = jsonFormat.main.humidity + "%";
    wind.innerHTML = jsonFormat.wind.speed + "Km/H";

    if (Status.innerHTML === "Clouds") {
        image.src = "./imgs/cloud.png"
    }
    if (Status.innerHTML === "Mist") {
        image.src = "./imgs/mist.png"
    }
    if (Status.innerHTML === "Rain") {
        image.src = "./imgs/rain.png"
    }
    if (Status.innerHTML === "Haze") {
        image.src = "./imgs/haze.png"
    }
    if (Status.innerHTML === "Clear") {
        image.src = "./imgs/clear.png"
    }
    if (Status.innerHTML === "Snow") {
        image.src = "./imgs/snow.png"
    }
    if (Status.innerHTML === "Thunderstorm") {
        image.src = "./imgs/snow.png"
    }

}



searchbtn.addEventListener("click", () => {
    checkWeather(input.value)
})

document.addEventListener("keypress",(e)=>{
if (e.key === "Enter") {
    checkWeather(input.value)

}
})