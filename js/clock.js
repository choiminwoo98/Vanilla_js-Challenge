const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const second = date.getSeconds();

  clockTitle.innerText = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${second}초 `;
}

getClock();

setInterval(getClock, 1000);
