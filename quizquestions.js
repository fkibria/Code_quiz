// create an array that contains objects that have question and answer choices
document.addEventListener("DOMContentLoaded",function(){




var questions = [ {
    
    q: "Commonly used data types do NOT include",
    choices: ["strings","booleans", "alerts","numbers"],
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
},

];

var questionLength = questions.length;


var myTimer = function(counter){
    var myInterval = setInterval(function(){
        if(counter==0){
            clearInterval(myInterval)
         }
         else {
            counter--;
            document.getElementById("test").innerText = counter;
         };
    }, 1000);
}

var questionFunctionality = function(){ 
    var score = 0;

    var questions = [ {
    
        q: "Commonly used data types do NOT include",
        choices: ["strings","booleans", "alerts","numbers"],
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
    },
    
    ];


       if(questionLength==0){
            clearInterval(newInterval)
         }
         else {
            questionLength--;
            console.log('question length',questionLength);
             document.getElementById("test2").innerHTML = questions[questionLength].q;
             myTimer(5);
 
         };
 }

questionFunctionality();
var newInterval = setInterval( questionFunctionality, 5000);



})