var formAnswers = document.querySelector(".quiz-form");
var buttonClick = document.querySelector("#btn-check");
var outputBox = document.querySelector("#output-box")
var rightAnswer = [
    "90",
    "right angled",
    "one right angle",
    "12,16,20",
    "Equilateral triangle",
    "100",
    "30",
    "a+b+c",
    "no",
    "45",
] ;

buttonClick.addEventListener("click", calculateScore);

function calculateScore(){
    var formData = new FormData(formAnswers);
    var score = 0;
    var i = 0;
    for ( let value of formData.values()){
         if ( value === rightAnswer[i] ){
            score = score+1;
            
        }
        i = i+1;

    }  
        showMessage(`Your score is : ${score} Points `);
    }
   
     


function showMessage (msg){
    outputBox.innerHTML= msg;
}