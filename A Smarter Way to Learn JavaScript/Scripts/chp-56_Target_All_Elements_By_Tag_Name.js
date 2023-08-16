var par = document.getElementsByTagName("p");
var textInMiddleParagraph = par[1].innerHTML;
par[1].innerHTML = "Hello This is KJW Codings";
var textInLastParagraph = par[par.length-1].innerHTML;
par[par.length-1].innerHTML = "Kashi";
par[0].innerHTML = "Kashif";

for(var i = 0; i < par.length; i++) {
    par[i].style.fontFamily = "verdana, Geneve, sans-serif";
    // par[i].innerHTML = "K";
}