function makeSmall(eId) {
    document.getElementById(eId).style.fontSize = "1em";
}

function makeBig() {
    document.getElementById("p1").style.fontSize = "2em";
    document.getElementById("p1").style.fontWeight = "bold";
}

function fixImage() {
    document.getElementById("p1").style.cssFloat = "left";
}

function fixImage(elementId, imageName) {
    document.getElementById(elementId).src = imageName;
}