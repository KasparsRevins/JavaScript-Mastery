function createImage (event) {
    event.preventDefault();
    var image = document.createElement("img");

    image.setAttribute("src","./balloonimg" + Math.round(Math.random()*2) + ".jpg");

    // var buttonClicked = Math.round(Math.random()*2);
    // if (buttonClicked == 1) {
    //     image.setAttribute("src", "https://media.istockphoto.com/id/1320362409/photo/colorful-balloons-3d-render-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h0eM6zzipNCDoX1rhfIAeNhCiqCrLaFmiQBf_hM2B70=");
    // } else {
    //     image.setAttribute("src", "https://media.istockphoto.com/id/911787860/photo/yellow-balloon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vFmg02ED1U9oKoMrUoEdWw9nV6ztFI7Elm9paRXXlmc=");
    // }

    // image.setAttribute("src", "https://media.istockphoto.com/id/911787860/photo/yellow-balloon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=vFmg02ED1U9oKoMrUoEdWw9nV6ztFI7Elm9paRXXlmc=");
    // image.setAttribute("src", "https://media.istockphoto.com/id/1320362409/photo/colorful-balloons-3d-render-illustration-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=h0eM6zzipNCDoX1rhfIAeNhCiqCrLaFmiQBf_hM2B70=");
    
    image.setAttribute("width","200px");
    image.setAttribute("heigth","200px");
    var showBalloon = document.getElementById("showBalloon");
    showBalloon.appendChild(image);
}