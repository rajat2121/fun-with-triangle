var inputBase = document.querySelector("#valueBase");
var inputHeight = document.querySelector("#valueHeight");
var buttonSubmit = document.querySelector("#button-hypo");
var HypoDisplay = document.querySelector("#output-box");



function calculateHypotenuse(){ 
    var base = inputBase.value;
    var height = inputHeight.value;
    if ( base >0 && height >0){ 
    if(base&&height){
    var hypotenuse = valueOfHypotenuse(base,height);
    
    HypoDisplay.innerText ="Hypotenuse of triangle is :"+hypotenuse;
    
} else {
    HypoDisplay.innerText="Please input valid Values";
}
    } else {
        HypoDisplay.innerText="Please input Positive values";
    }
}

buttonSubmit.addEventListener("click",calculateHypotenuse);

function valueOfHypotenuse(b,h){
     var area = b*b + h*h;
     var squareRoot = Math.sqrt(area);
     return squareRoot;
}
