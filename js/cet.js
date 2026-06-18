const questions = [
    {
        question: "What is the value of log10(1000)?",
        options: ["2", "3", "4", "1"],
        answer: "3"
    },
    {
        question: "Which of the following is a chemical element?",
        options: ["Water", "Air", "Oxygen", "Salt"],
        answer: "Oxygen"
    },
    {
        question: "What is the derivative of x²?",
        options: ["x", "2x", "x²", "2"],
        answer: "2x"
    },
    {
        question: "Which law states that PV = nRT?",
        options: ["Ohm's Law", "Newton's Law", "Gas Law", "Ideal Gas Law"],
        answer: "Ideal Gas Law"
    },
    {
        question: "What is the unit of electric current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        answer: "Ampere"
    },
    {
        question: "What is the molecular formula of water?",
        options: ["CO2", "H2O", "O2", "H2SO4"],
        answer: "H2O"
    },
    {
        question: "What is the value of sin(90°)?",
        options: ["0", "1", "-1", "1/2"],
        answer: "1"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Lion", "Tiger", "Cheetah", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "What is 5²?",
        options: ["10", "15", "25", "20"],
        answer: "25"
    },
    {
        question: "Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Nitrogen"
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

function checkAnswer(clickedButton, selectedOption) {
    if (answered) return;

    answered = true;

    let correctAnswer = questions[currentQuestion].answer;

    let options = document.querySelectorAll(".option");

    options.forEach(currentbutton => {

        if (currentbutton.innerText === correctAnswer) {
            currentbutton.classList.add("correct");
        }

        if (currentbutton === clickedButton && selectedOption !== correctAnswer) {
            currentbutton.classList.add("wrong");
        }
    });

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("result").innerHTML = "Correct Answer..!!!";
    }

    else {
        document.getElementById("result").innerHTML = "Incorrect Answer...";
    }
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    }
    else {

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

function previousQuestion() {

    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

loadQuestion();
