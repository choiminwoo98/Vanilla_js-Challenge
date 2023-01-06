const API_KEY = "40e2159d29f3c5ab597de80f8e25d578";
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
