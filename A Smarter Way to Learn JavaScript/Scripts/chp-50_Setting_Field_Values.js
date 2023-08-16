function fillCity() {
  var cityName;
  var zipEntered = document.getElementById("zip").value;
  switch (zipEntered) {
    case "60608":
      cityName = "Chicago";
      break;

    case "68114":
      cityName = "Omaha";
      break;

    case "53212":
      cityName = "Milwaukee";
  }
  document.getElementById("city").value = cityName;
}

function fillPrefix() {
  var namePrefix = "Dr. ";
  document.getElementById("name").value = namePrefix;

}

// function removePrefix() {
//   var noPrefix = "";
//   document.getElementById("name").value = noPrefix;
// }

function fillCountryCode() {
  var countryCode = "+92 ";
  document.getElementById("phoneNumber").value = countryCode;
}