const clock = document.querySelector(".clock_h1");

function startClock() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  document.getElementsByTagName("h1").innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}

document.addEventListener("load", startClock);
