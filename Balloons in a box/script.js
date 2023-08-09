var box = document.createElement('div');
box.style.width = '800px';
box.style.height = '800px';
box.style.border = 'thick solid black';
box.style.borderColor = 'black';

document.body.appendChild(box);

function balloon(event){
    event.preventDefault();
    var image = document.createElement("img");
    image.setAttribute("src","./balloonimg" + Math.round(Math.random() * 2) + ".jpg");
    image.setAttribute("width","100px");
    image.setAttribute("heigth","100px");
    var showBalloon = document.getElementById("showBalloon");
    showBalloon.appendChild(image);
}
