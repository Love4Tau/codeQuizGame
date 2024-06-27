let time = 15;
let intervalId = null;
function startTimer() {
    // let time = 5;
    intervalId = setInterval(function(){
        document.getElementById("codeTimer").innerHTML=time;
        time--;
        if(time < 0) {
            time = 0;
            endQuiz();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(intervalId);
    
}

let questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answer: 2,
        options: [
            '1. strings',
            '2. booleans',
            '3. alerts',
            '4. numbers'
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed with ____________.',
        answer: 2,
        options: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store ____________.',
        answer: 3,
        options: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
        ]
    },
    {
        question: 'String values must be enclosed within ____________ when being assigned to variables.',
        answer: 2,
        options: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. paranthesis'
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        answer: 3,
        options: [
            '1. Javascript',
            '2. terminal/bash',
            '3. for loops',
            '4. console.log'
        ]
    }
]

const button = document.querySelector(".btn");
const parentElement = document.getElementById("choiceHolder")
const childElement = document.querySelector("li")
let currentQuestion = 0;

function displayQuiz() {

    //Clearing current text and displaying elements for quiz
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz").style.display = "block";

    const questHolder = document.getElementById("question");
    const answerholder = document.getElementById("choices");

    questHolder.innerHTML = questions[currentQuestion].question;
    answerholder.innerHTML = "";

    questions[currentQuestion].options.forEach((option, index) => {
        
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer (index);
        li.appendChild(button);
        answerholder.appendChild(li);
    });
    
}

let score = 0;
const resultHolder = document.getElementById("result");

function checkAnswer(option) {
    if(option === questions[currentQuestion].answer){
        score++;
        resultHolder.innerHTML = "Correct";
        addTime();
    } else {
        score--;
        resultHolder.innerHTML = "Incorrect";
        removeTime();
    }

    currentQuestion++;

    if(currentQuestion < questions.length) {
        displayQuiz();
    } else {
        endQuiz();
    }
}


function addTime(){
    if(time>0){
        time+=10;
        document.getElementById("codeTimer").innerHTML=time;
       
    }else{
        endQuiz();
    }
}

function removeTime(){
    if(time>0){
        time-=10;
        document.getElementById("codeTimer").innerHTML=time;
    }else if(time <= 0){
        time = 0;
        endQuiz();
    }
}


function endQuiz(){
    stopTimer();
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    document.getElementById("userScore").innerHTML = score;
    document.getElementById("codeTimer").innerHTML=time;
}

//Select value of textarea element
const initialsBox = document.getElementById("initialsBox");

//save to local storage


function saveLocalStorage() {

        const initialsValue = initialsBox.value;
        const data = JSON.stringify(initialsValue);

        localStorage.setItem("name", data);
        localStorage.setItem(data, score);
        displayHighScores();
}

const scorers = document.getElementById("scorers");

function displayHighScores(){
    //Hiding other elements and displaying high score section
    document.getElementById("hideHeader").style.display = "none";
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("highScores").style.display = "block";

    //Getting local storage data and parsing it to push to HTML
    const data = localStorage.getItem("name");
    const parsedData = JSON.parse(localStorage.getItem("name"))
    const parsedScore = localStorage.getItem(data);
    const userScore = document.getElementById("scorers");
    if(parsedData !== null && parsedScore !== null) {
        userScore.textContent = parsedData + ": " + parsedScore;
    } else {
        userScore.textContent = "No Saved High Scores";
    }
}


function clearLeaderboard(){
    localStorage.clear();
    window.location.reload();
}

function displayHomepage(){
    restartQuiz();
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScores").style.display = "none";
}

function init() {
    startTimer();
    displayQuiz();
}
