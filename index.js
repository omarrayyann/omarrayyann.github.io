window.addEventListener('resize', equalHeightFix);

function equalHeightFix(){
  var w = document.documentElement.clientWidth;
  if (w>992){
  var height = this.document.getElementById("secondCol").getBoundingClientRect().height;
  changeHeights(["firstCol", "thirdCol"], height);}
  else{
    changeHeights(["firstCol", "thirdCol"], "auto");
  }
}

function changeHeights(ids, height){
  for(let i = 0; i<ids.length; i++){
    this.document.getElementById(ids[i]).setAttribute("style","height:" + height + "px;text-align:left");
  }
}