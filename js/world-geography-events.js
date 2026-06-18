const questions = [
{
    question: "Which is the largest continent in the world?",
    options: ["Africa", "Asia", "Europe", "Australia"],
    answer: "Asia"
},
{
    question: "Which is the smallest continent in the world?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    answer: "Australia"
},
{
    question: "Which is the longest river in the world?",
    options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
    answer: "Nile"
},
{
    question: "Which country has the largest population in the world?",
    options: ["India", "USA", "China", "Russia"],
    answer: "India"
},
{
    question: "Which desert is the largest in the world?",
    options: ["Sahara", "Gobi", "Thar", "Kalahari"],
    answer: "Sahara"
},
{
    question: "Which country hosted the FIFA World Cup 2022?",
    options: ["Russia", "Qatar", "Brazil", "Germany"],
    answer: "Qatar"
},
{
    question: "Which is the deepest ocean in the world?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    answer: "Pacific Ocean"
},
{
    question: "Which country is known as the Land of the Rising Sun?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    answer: "Japan"
},
{
    question: "Which mountain range separates India and China?",
    options: ["Alps", "Himalayas", "Andes", "Rockies"],
    answer: "Himalayas"
},
{
    question: "Which is the largest country in the world by area?",
    options: ["Canada", "USA", "China", "Russia"],
    answer: "Russia"
}
];


let currentQuestion = 0;
let score = 0;

let answered = false;

function loadQuestion() {
    answered = false;

    document.getElementById("result").innerHTML = "";
    document.getElementById("progress").innerHTML = `Question ${currentQuestion + 1} / ${questions.length}`;

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    let html = "";

    for (let i = 0; i < q.options.length; i++) {

    html += `<button class="option" onclick="checkAnswer(this,'${q.options[i]}')">${q.options[i]}</button>`;
}

    document.getElementById("options").innerHTML = html;

}

function checkAnswer(clickedButton , selectedOption){
    if(answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].answer;

    let options = document.querySelectorAll(".option");

    options.forEach(currentbutton =>{

        if(currentbutton.innerText === correctAnswer){
            currentbutton.classList.add("correct");
        }

        if(currentbutton === clickedButton && selectedOption !== correctAnswer){
            currentbutton.classList.add("wrong");
        } 
    });

    if(selectedOption === correctAnswer){
        score++;
        document.getElementById("result").innerHTML = "Correct Answer..!!!";
    }

    else{
        document.getElementById("result").innerHTML = "Incorrect Answer...";
    }
}

function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    }
    else{

        document.querySelector(".quiz-box").innerHTML =
        `<h1 style="text-align:center;color:#1e3a8a;">
            Your Quiz Completed
        </h1>

        <h2 style="text-align:center;margin-top:20px;">
            Your Score: ${score}/${questions.length}
        </h2>

        <button class="btn" style="display:block ;margin:20px auto;" onclick="location.reload()">
            Restart Quiz
        </button>
        `;
    }
}

function previousQuestion(){

    if(currentQuestion > 0){
        currentQuestion--;
        loadQuestion();
    }
}

loadQuestion();
