// Asks Javascript to figure out the day of the week and then assign that number value to weekDay. Sunday is 0, Monday is 1, and so on.
var date = new Date();
var weekDay = date.getDay();

// Correlates the number day to the business's store hours.
if (weekDay == 2 || weekDay == 4) {
  document.getElementById("hoursTop").textContent="Open today: 3pm - 10pm";
}

else if (weekDay == 5) {
  document.getElementById("hoursTop").textContent="Open today: 1pm - 6pm";
}

else {
  document.getElementById("hoursTop").textContent="Closed today";
}