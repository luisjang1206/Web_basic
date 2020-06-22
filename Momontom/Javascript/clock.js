const clock = document.querySelector(".js-clock");

function getTime() {
  const date = new Date(),
    time = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  return `${time < 10 ? `0${time}` : time}:${
    minute < 10 ? `0${minute}` : minute
  }:${second < 10 ? `0${second}` : second}`;
}

function paintClock() {
  const now = getTime();

  clock.innerHTML = now;
}

function init() {
  paintClock();
  setInterval(paintClock, 500);
}

init();
