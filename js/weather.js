const API_KEY = "658298308bad8a75245f1476ba1a9031";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${parseFloat(
        data.main.temp / 100
      ).toFixed(2)}°C`;
    });
}
function onGeoError() {
  alert("can't find");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
