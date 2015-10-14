var date = new Date();
var weekDay = date.getDay();


if (weekDay == 2) {
  document.getElementById("hoursTop").textContent="Open today: 3pm - 10pm";
}

else if (weekDay == 4) {
  document.getElementById("hoursTop").textContent="Open today: 3pm - 10pm";
}

else if (weekDay == 5) {
  document.getElementById("hoursTop").textContent="Open today: 1pm - 6pm";
}

else {
  document.getElementById("hoursTop").textContent="Closed today";
}