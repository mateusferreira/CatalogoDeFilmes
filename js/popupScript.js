function Login() {
  var done=0;
  var usuario = document.getElementsByName('usuario')[0].value;
  usuario=usuario.toLowerCase();
  var senha= document.getElementsByName('senha')[0].value;
  seha=senha.toLowerCase();
  if (usuario=="admin" && senha=="admin") {
    window.location="index.html";
    done=1;
  }
  if (done==0) { alert("Dados incorretos, tente novamente"); }
}

function openPDF (arquivo) {

 }
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "70%";
    document.getElementById("myNav").style.border = "3px solid rgb(170,216,184)";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNav").style.border = "0px";
}