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

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answer: 2,
        options: [
            '1. strings',
            '2. boolean',
            '3. alerts',
            '4. numbers'
        ]
    },
    {
        question: 'TEST Commonly used data types DO NOT include:',
        answer: 2,
        options: [
            '1. T strings',
            '2. T boolean',
            '3. T alerts',
            '4. T numbers'
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answer: 3,
        options: [
            '1. strings',
            '2. boolean',
            '3. alerts',
            '4. numbers'
        ]
    },
    {
        question: 'Commonly used data types DO NOT include:',
        answer: 0,
        options: [
            '1. strings',
            '2. boolean',
            '3. alerts',
            '4. numbers'
        ]
    }
    ]

const button = document.querySelector(".btn");
const parentElement = document.getElementById("choiceHolder")
const childElement = document.querySelector("li")
let currentQuestion = 0;

function displayQuiz() {

    console.log(questions[currentQuestion].answer)
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




    // for (let i=0; i < questions.length; i++){
    //     document.getElementById("question").innerText = questions[i].question;
    //     document.getElementById("choice1").innerText = questions[i].options[0];
    //     document.getElementById("choice2").innerText = questions[i].options[1];
    //     document.getElementById("choice3").innerText = questions[i].options[2];
    //     document.getElementById("choice4").innerText = questions[i].options[3];

    //     if(questions.answer) {
    //         button.dataset.answer = questions.answer;
    //     }
    //     button.addEventListener("click", userAnswer);
    // }
    
}

let score = 0;
const resultHolder = document.getElementById("result");

function checkAnswer(option) {
    if(option === questions[currentQuestion].answer){
        score++;
        resultHolder.innerHTML = "Correct";
        localStorage.setItem("wins", score)
        addTime();
    } else {
        score--;
        resultHolder.innerHTML = "Incorrect";
        localStorage.setItem("losses", score)
        console.log(score);
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
    }else{
        endQuiz();
    }
}

function endQuiz(){
    stopTimer();
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalScore").style.display = "block";
    document.getElementById("userScore").innerHTML = score;
}

let userInitials = document.getElementById("initialsBox").value;

function saveScore(){
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    let userInitials = document.getElementById("initialsBox").value;
    console.log(userInitials)
    displayHighScores();
}

const scorers = document.getElementById("scorers");

function displayHighScores(){
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScores").style.display = "block";
    const li = document.createElement("li");
    li.innerHTML = score;
    scorers.appendChild(li);
}

function displayHomepage(){
    document.getElementById("mainPage").style.display = "block";
    document.getElementById("quiz").style.display = "none";
    document.getElementById("finalScore").style.display = "none";
    document.getElementById("highScores").style.display = "none";
}

function resetForm(){
        parentElement.removeChild(childElement)
}

function init() {
    startTimer();
    displayQuiz();
}
