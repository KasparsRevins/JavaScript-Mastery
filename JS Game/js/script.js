function hiddenOnStartBalloons(event) {
  event.preventDefault();
  var allBalloons = document.querySelectorAll(".balloonclass");

  var balloonArray = [...allBalloons];

  balloonArray.forEach(function (balloon) {
    balloon.style.display = "none";
  });
}

function toggleBalloons(event) {
  event.preventDefault();
  var allBalloons = document.querySelectorAll(".balloonclass");
  var hideBtn = document.getElementById("hidebtn");

    hideBtn.style.display = "none";

    var balloonArray = [...allBalloons];

    balloonArray.forEach(function (balloon) {
      balloon.style.display = "block";
})
}
