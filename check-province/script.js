let city = ["BALOCHISTAN", "SINDH", "PUNJAB", "KPK"];

let chk_cty = prompt("Enter your city name").toUpperCase();

let City = false;

for (let i = 0; i < city.length; i++) {
  if (chk_cty === city[i]) {
    City = true;
    break;
  }
}
if (City) {
  alert(chk_cty+ " is one of the provinces of Pakistan");
} else {
  alert(chk_cty+" is not the province of Pakistan");
}
