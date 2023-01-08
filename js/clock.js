const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, 0);
  const minutes = String(date.getMinutes()).padStart(2, 0);
  const second = String(date.getSeconds()).padStart(2, 0);

  clockTitle.innerText = `${hours}:${minutes}:${second}`;
}

getClock();

setInterval(getClock, 1000);
