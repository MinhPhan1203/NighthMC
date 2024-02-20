function copyText(){
  const text = document.getElementById('text').innerText
  const btnText = document.getElementById('btn')
  navigator.clipboard.writeText(text);
  btnText.innerText = "MC.NIGHTHMC.XYZ"
  alert("IP server has been copied!");
}

function myFunction() {
  var navLinks = document.querySelector('.nav-bar-link');
  navLinks.classList.toggle('show');
}


