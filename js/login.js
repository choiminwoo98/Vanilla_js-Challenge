const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginText = document.querySelector("#greeting");
const USERNAME_KEY = "username";

function onLoginsubmit(event) {
  username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  console.log(username);
}
loginForm.addEventListener("submit", onLoginsubmit);

function paintGreeting(username) {
  loginText.innerText = `${username}님의 ToDo-List `;
  loginForm.style = "display:none";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginsubmit);
} else {
  paintGreeting(savedUsername);
}
