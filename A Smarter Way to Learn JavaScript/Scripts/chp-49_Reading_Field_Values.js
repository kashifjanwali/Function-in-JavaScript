function checkAddress() {
  if (document.getElementById("email").value == "") {
    alert("1st Email is required");
  }
}

function checkEmail(fieldId) {
  if ((document.getElementById(fieldId).value == "")) {
    alert(" 2nd Email is necessary");
  }
}

function checkEmailAddress(fieldAddress) 
{
    var val = document.getElementById(fieldAddress).value;
    if (val == "") {
        alert("3rd Email is required");
    }
}