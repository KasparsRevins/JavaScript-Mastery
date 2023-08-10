// var box = document.createElement('div');
// box.style.width = '800px';
// box.style.height = '800px';
// box.style.border = 'thick solid black';
// box.style.borderColor = 'black';
// box.setAttribute("id","boxImage")

// document.body.appendChild(box);

var ctx = null;
var imageX = 0;
var imageY = 0;
var speedX = 1;
var speedY = 1;
var sizeX = 20;
var sizeY = 20;
var boxSizeX = 480;
var boxSizeY = 320;
var image = null;

function balloon(event){
    event.preventDefault();
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    image = new Image(sizeX, sizeY);
    image.onload = function() { setInterval("movement()", 10);}
    // var image = document.createElement("img");
    image.setAttribute("src","./balloonimg" + Math.round(Math.random() * 2) + ".jpg");
    image.setAttribute("width","25px");
    image.setAttribute("heigth","25px");
    // var canvas = document.getElementById("canvas");
    // canvas.appendChild(image);
}
function movement() {
    ctx.clearRect(0, 0, boxSizeX, boxSizeY);
    if (imageX < 0 || imageX > boxSizeX - sizeX) {
        speedX = -speedX
    }
    if (imageY < 0 || imageY > boxSizeY - sizeY) {
        speedY = -speedY
    }
        imageX += speedX;
        imageY += speedY;
    ctx.drawImage(image, imageX, imageY);
}
