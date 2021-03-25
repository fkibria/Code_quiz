let counter = 75;
var myInterval;
let userFinalScore = 0;
const thePage = document.querySelector("#firstQuestion");

var scores = [];


const questions = [
    {
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

var startScreen = document.querySelector(".start-screen");
var startButton = document.querySelector("#start");


// create an array that contains objects that have question and answer choices
var documentLoad = function () {
    document.addEventListener("DOMContentLoaded", function () {
        startScreen = document.querySelector(".start-screen");
        startButton = document.querySelector("#start");

        startButton.addEventListener("click", () => { Start(startScreen, startButton); });
    });
}
documentLoad();

function Start(startScreen, startButton) {
    startScreen.classList.add("hidden");
    startButton.classList.add("hidden");
    document.querySelector(".scoreboard").classList.add("hidden");
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

function gameOver(finalScore) {
    thePage.innerHTML = `Game over your score is ${finalScore}`
    document.getElementById("timer").innerText = "";
    counter = 75;
    userFinalScore = finalScore;
    enterInitials();
}

const questionFunctionality = function () {
    if (questionIndex == 0) {
        clearInterval(myInterval)
        scores.push(counter);
        gameOver(counter);

    }
    else {
        questionIndex--;
        thePage.innerHTML = `<h3>${questions[questionIndex].q}</h3>`;
        displayChoices(questions[questionIndex].choices, thePage, questions[questionIndex].a);
    };
}

function readScores()
{
 const scores = localStorage.getItem("scores");
 return JSON.parse(scores);
};



function writeScore(initials){
    let scores = readScores();
    console.log(scores);
    if (scores === null) {
        scores = []
    } 
    const temp = {};
    temp["initials"] = initials;
    temp["score"] = userFinalScore;
    scores.push(temp);
    localStorage.setItem("scores",JSON.stringify(scores));
    return scores;
}


function displayHighScores(){
    const initials = document.getElementById("initials").value;
    console.log(initials);
    console.log(userFinalScore);
    const scores = writeScore(initials);

    myHtml = `
    <div> 
        <table>
        <th>
            <td><strong>[  Initials  ]<strong></td>
            <td><strong>[  Score  ]<strong></td>
        </th>`
    for(let i=0; i<scores.length; i++){
        let score = scores[i];
        myHtml+= `
        <tr>
        <td>${   score.initials  }</td>
        <td><td>
        <td>${   score.score   }</td>
        </tr>
        `
    }
    myHtml  += `
        </table>
    </div>
    <button class = "btn" id="startAgain" type = "button" onclick="playAgain();">Play Again</button>
     `
     thePage.innerHTML = myHtml;
}

function playAgain(){
    location.reload();
}

function enterInitials() {
   myHtml = `
   <div> 
    <label for ="initials">Please enter initials</label>
    <input type ="text" id = "initials"></div>
    <button class = "btn" id="display" type = "button" onclick="displayHighScores();">Submit</button>
    <button class = "btn" id="startAgain" type = "button" onclick="playAgain();">Play Again</button>
    </div>
    `


    document.getElementById("selection").classList.add("hidden");
    thePage.innerHTML = myHtml;

}


function checkAnswer() {
    if (this.innerText == questions[questionIndex].a) {
        // correct
        document.getElementById("selection").innerHTML = "Correct!";
    } else {
        //wrong
        counter -= 10;
        document.getElementById("selection").innerHTML = "Incorrect!";
    }
    questionFunctionality();
}


function displayChoices(arr, dom) {
    let myHtml = '';
    for (let i = 0; i < arr.length; i++) {
        dom.innerHTML += '<button class="choice">' + arr[i] + '</button>';
    }

    const options = document.querySelectorAll(".choice");

    options.forEach((btn) => {
        btn.addEventListener("click", checkAnswer);
    })

}
