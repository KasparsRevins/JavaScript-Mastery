// var box = document.createElement('div');
// box.style.width = '800px';
// box.style.height = '800px';
// box.style.border = 'thick solid black';
// box.style.borderColor = 'black';
// box.setAttribute("id","boxImage")

// document.body.appendChild(box);

// var ctx = null;
// var imageX = 0;
// var imageY = 0;
// var speedX = 1;
// var speedY = 1;
// var sizeX = 20;
// var sizeY = 20;
// var boxSizeX = 480;
// var boxSizeY = 320;
// var image = null;

function balloonMovement() {

    var boxWidth = (canvas.getBoundingClientRect().width);
    var boxHeight = (canvas.getBoundingClientRect().height);
    var allBalloons = document.querySelectorAll(".balloonclass");

    allBalloons.forEach(element => {
        element.directionY = 1;
        element.directionX = 1;
        element.style.left = (Math.round((Math.random(boxWidth) * 600))) + "px";
        element.style.top = (Math.round((Math.random(boxHeight) * 600))) + "px";
    });

    let startKey = setInterval(() => {

    createdImage = document.querySelectorAll(".balloonclass");
    
    createdImage.forEach(element => {
        if (element.directionY == 1) {
            var upper = parseInt(element.style.top) + 1;
            element.style.top = upper + "px";
        } else {
            var upper = parseInt(element.style.top) - 1;
            element.style.top = upper + "px";
        }

        if (element.directionX == 1) {
            var leftSide = parseInt(element.style.left) + 1;
            element.style.left = leftSide + "px";
        } else {
            var leftSide = parseInt(element.style.left) - 1;
            element.style.left = leftSide + "px";
        }

        var canvasHeightWidth = canvas.getBoundingClientRect();

        var balloon = element.getBoundingClientRect();

        if (balloon.top + balloon.height >= canvasHeightWidth.bottom) {
            element.directionY = 0;
        }
        if (balloon.top <= canvasHeightWidth.top) {
            element.directionY = 1;
        }
        if (balloon.left <= canvasHeightWidth.left) {
            element.directionX = 1;
        }
        if (balloon.right >= canvasHeightWidth.width) {
            element.directionX = 0;
        }
    });
}, 10)

}

function addBalloon() {

    var createdImage = document.createElement("img");
    createdImage.setAttribute("src","./balloonimg" + (Math.round(Math.random() * 2)) + ".jpg");
    createdImage.setAttribute("class","balloonclass");
    createdImage.style.left = (Math.round((Math.random(500) * 600 ))) + "px";
    createdImage.style.top = (Math.round((Math.random(500) * 600 ))) + "px";
    createdImage.directionX = 1;
    createdImage.directionY = 1;
    canvas.appendChild(createdImage)
}


// function balloon(event){
//     event.preventDefault();
//     var canvas = document.getElementById("canvas");
//     ctx = canvas.getContext("2d");
//     image = new Image(sizeX, sizeY);
//     image.onload = function() { setInterval("movement()", 10);}
    // var image = document.createElement("img");
    // image.setAttribute("src","./balloonimg" + Math.round(Math.random() * 2) + ".jpg");
    // image.setAttribute("width","25px");
    // image.setAttribute("heigth","25px");
    // var canvas = document.getElementById("canvas");
    // canvas.appendChild(image);
// }

// function movement() {
//     ctx.clearRect(0, 0, boxSizeX, boxSizeY);
//     if (imageX < 0 || imageX > boxSizeX - sizeX) {
//         speedX = -speedX
//     }
//     if (imageY < 0 || imageY > boxSizeY - sizeY) {
//         speedY = -speedY
//     }
//         imageX += speedX;
//         imageY += speedY;
//     ctx.drawImage(image, imageX, imageY);
// }
