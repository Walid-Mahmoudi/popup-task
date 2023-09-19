var mtn = document.getElementById("bottn");
var veiw = document.getElementById("bbb");
var close = document.getElementById("exit");
var btnDis = document.getElementById("Cancel");
var btnCre = document.getElementById("Create");
// var password = document.getElementById("text-pass");
var generatePass = document.getElementById("generate");
mtn.addEventListener("click", (name) => {
  veiw.classList.remove("disabel");
});

close.addEventListener("click", (close) => {
  veiw.classList.add("disabel");
});

function wawa() {
  var checkBox = document.getElementById("flexCheckDefault");
  if (checkBox.checked) {
    btnCre.style.cursor = "pointer";
    btnCre.style.opacity = 1;
  } else {
    btnCre.style.cursor = "no-drop";
    btnCre.style.opacity = 0.5;
  }
}

function copy() {
  // Get the text field
  var copyText = document.getElementById("text-pass");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}

generatePass.addEventListener("click", function () {
  genPassword();
});

function genPassword() {
  var chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordLength = 12;
  var password = "";
  for (var i = 0; i <= passwordLength; i++) {
    var rondamPass = Math.floor(Math.random() * chars.length);
    password =+ chars.substring(rondamPass, rondamPass +1);
  }
  document.getElementById("text-pass").value = password;
}
