/* Countdown function */
const getCurrentYear = new Date().getFullYear();

const wantedTime = new Date(`January 31 ${getCurrentYear} 00:00:00`);

const countdownUpdate = () => {
  const currentTime = new Date();
  const difference = wantedTime - currentTime;

  const d = Math.floor(difference / 1000 / 60 / 60 / 24);
  const h = Math.floor(difference / 1000 / 60 / 60) % 24;
  const m = Math.floor(difference / 1000 / 60) % 60;
  const s = Math.floor(difference / 1000) % 60;

  document.getElementById("days").innerHTML = d;
  document.getElementById("hours").innerHTML = h < 10 ? "0" + h : h;
  document.getElementById("minutes").innerHTML = m < 10 ? "0" + m : m;
  document.getElementById("seconds").innerHTML = s < 10 ? "0" + s : s;
};

setInterval(countdownUpdate, 1000);

/* Dropdown function */
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".drop-down");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (otherButton) {
        if (otherButton !== button) {
          otherButton.classList.remove("open");
          otherButton.classList.add("closed");
        }
      });

      button.classList.toggle("open");
      button.classList.toggle("closed");
    });
  });
});

/* Burguer */
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .header-section .navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
