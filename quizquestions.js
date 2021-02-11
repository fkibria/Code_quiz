let counter  = 75;
var myInterval;
const thePage = document.querySelector("#firstQuestion");

const questions = [{
    q: "Commonly used data types do NOT include",
    choices: ["strings", "booleans", "alerts", "numbers"],
    a: "alerts"
},
{
    q: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    a: "parentheses"
},
{
    q: "Arrays in Javascript can be used to store ____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    a: "all of the above"
},
{
    q: "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    a: "quotes"
},
{
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    a: "console log"
}
];

var questionIndex = questions.length;

// create an array that contains objects that have question and answer choices
document.addEventListener("DOMContentLoaded", function () {
    var startScreen = document.querySelector(".start-screen");
    var startButton = document.querySelector("#start");

    startButton.addEventListener("click", () => {Start(startScreen, startButton);});
})

function Start(startScreen, startButton) {
    startScreen.classList.add("hidden");
    startButton.classList.add("hidden");
    questionFunctionality();
    myTimer();
}

var myTimer = function () {
    myInterval = setInterval(function () {
        if (counter <= 0) {
            clearInterval(myInterval)
            gameOver(0);
        }
        else {
            counter--;
            document.getElementById("timer").innerText = counter;
        };
    }, 1000);
}

function gameOver(finalScore){
    thePage.innerHTML = `Game over your score is ${finalScore}`
    document.getElementById("timer").innerText = "";
}

const questionFunctionality = function () {
    if (questionIndex == 0) {
        clearInterval(myInterval)
        gameOver(counter);
    }
    else {
        questionIndex--;
        console.log('question length', questionIndex);
        console.log( questions[questionIndex].q);
        thePage.innerHTML = `<h3>${questions[questionIndex].q}</h3>`;
        displayChoices(questions[questionIndex].choices, thePage, questions[questionIndex].a);
    };
}

function wrongAnswer(){
    counter -= 10;
    questionFunctionality();    
    document.getElementById("#selection").innerText('<p> Incorrect! </p>');
}

function displayChoices(arr, dom, answer){
    let myHtml = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === answer){
            dom.innerHTML += '<button class="choiceRight">' + arr[i] + '</button>';
        }else{
            dom.innerHTML += '<button class="choice">' + arr[i] + '</button>';
        }
    }

    const wrongAnswers = document.querySelectorAll(".choice");
    const rightAnswer = document.querySelector(".choiceRight");

    wrongAnswers.forEach((btn) =>{
        btn.addEventListener("click", wrongAnswer);
        // btn.addEventListener("click", () => {document.getElementById("#selection").innerText('<p> Incorrect! </p>')});
    })

    rightAnswer.addEventListener("click", questionFunctionality);
}
