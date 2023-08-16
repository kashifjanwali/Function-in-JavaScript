var e = document.getElementById("rules");
var paragraphs = e.getElementsByTagName("p");
paragraphs[4].innerHTML = "This is para number 5";

var t = document.getElementById("table1");
var cells = t.getElementsByTagName("td");
for (var i = 0; i < cells.length ; i++) {
  cells[i].style.backgroundColor = "orange";
}
