function toggleBalloons(event) {
    event.preventDefault();
    var allBalloons = document.querySelectorAll(".balloonclass");
    
   
    var balloonArray = [...allBalloons];
    
    balloonArray.forEach(function(balloon)
    {
        balloon.style.display = 'none';
    });
}
    // if (allBalloons == 'block') {
    // } else {
    //     allBalloons.style.display = 'block';
    // }



// function balloonMovement() {

//     var boxHeight = (canvas.getBoundingClientRect().height);
//     var allBalloons = document.querySelectorAll(".balloonclass");

//     allBalloons.forEach(element => {
//         element.directionY = 1;
//         element.style.top = (Math.round((Math.random(boxHeight) * 600))) + "px";
//     });

//     var createdImage = document.createElement("img");
//     createdImage.setAttribute("src","./balloonimg" + (Math.round(Math.random() * 2)) + ".jpg");
//     createdImage.setAttribute("class","balloonclass");
//     createdImage.style.left = (Math.round((Math.random(500) * 600 ))) + "px";
//     createdImage.style.top = "900px";
//     createdImage.directionY = 1;
//     canvas.appendChild(createdImage)

//     let startKey = setInterval(() => {

//     createdImage = document.querySelectorAll(".balloonclass");
    
//     createdImage.forEach(element => {
//         if (element.directionY == 1) {
//             var upper = parseInt(element.style.top) + 1;
//             element.style.top = upper + "px";
//         } else {
//             var upper = parseInt(element.style.top) - 1;
//             element.style.top = upper + "px";
//         }

//         var canvasHeightWidth = canvas.getBoundingClientRect();

//         var balloon = element.getBoundingClientRect();

//         if (balloon.top + balloon.height >= canvasHeightWidth.bottom) {
//             element.directionY = 0;
//         }
//         if (balloon.top <= canvasHeightWidth.top) {
//             element.directionY = 1;
//         }

//         if (balloon.right >= canvasHeightWidth.width) {
//             element.directionX = 0;
//         }
//     });
// }, 10)

// }
