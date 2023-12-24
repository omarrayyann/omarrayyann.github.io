window.addEventListener('resize', equalHeightFix);

function equalHeightFix(){

    var w = document.documentElement.clientWidth;
    if (w>992){
    for (let rowNumber = 0; rowNumber<6; rowNumber++){
        var height = this.document.getElementById("row"+rowNumber+"Head").getBoundingClientRect().height;
        changeHeights(rowNumber, height);
    }}
    else{
        for (let rowNumber = 0; rowNumber<6; rowNumber++){
            changeHeights(rowNumber, "auto");
        } 
    }

}

function changeHeights(rowNumber, height){

    var elements = document.getElementsByClassName("row"+rowNumber);

    for(var i = 0; i < elements.length; i++) {
        if(elements[i].id != "row"+rowNumber+"Head"){
            console.log(i);
        elements[i].setAttribute("style","height:" + height + "px;text-align:left");}
    }

}