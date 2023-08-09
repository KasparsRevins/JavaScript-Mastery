var currentDate = new Date();
var newYear = new Date(2024, 0, 1);

var daysUntilNewYear = Math.round(Math.abs(currentDate-newYear) / 1000);
// var daysUntilNewYear = Math.abs(newYear.getTime()-currentDate.getTime()) / 1000;

var seconds = parseInt(daysUntilNewYear);
var days = Math.floor(seconds / (3600 * 24));
seconds -= days * 3600 * 24;

var hours = Math.floor(seconds / 3600);
seconds -= hours * 3600;

var minutes = Math.floor(seconds / 60);
seconds -= minutes * 60;


var result = days + " days " + hours + " hours " + minutes + " minutes " + seconds + "seconds";

var box = document.createElement('div');
box.style.width = "250px";
box.style.height = "100px";
box.style.color = "black"
box.style.background = "yellow";
box.innerText = currentDate;
box.innerText = result;
document.body.appendChild(box);





