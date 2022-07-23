// FUNCTION - Switching to dropdown meny if the screen width is less than the maxWidth
maxWidth = 520
function correctNavBar(){
  console.log("asas")
  if (maxWidth>window.innerWidth && this.document.getElementById("shortNav").classList.contains("uk-hidden")){
    this.document.getElementById("longNav").classList.add("uk-hidden");
    this.document.getElementById("shortNav").classList.remove("uk-hidden");
  }
  else if (maxWidth<=window.innerWidth && this.document.getElementById("longNav").classList.contains("uk-hidden")){
    this.document.getElementById("shortNav").classList.add("uk-hidden");
    this.document.getElementById("longNav").classList.remove("uk-hidden");
  }
}

window.addEventListener('resize', correctNavBar)