function afterPic(eId, newPic) {
    document.getElementById(eId).src = newPic;
    dog.src = "";
}

function getLink() {
    var link = document.getElementById("twitter-link");
    var address = link.href;
    alert(address);
}