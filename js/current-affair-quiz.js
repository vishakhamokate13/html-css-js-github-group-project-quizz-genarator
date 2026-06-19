const questions = [
    {
        question: "Which city hosted the 2024 Summer Olympics?",
        options: ["Tokyo", "Paris", "London", "Los Angeles"],
        answer: "Paris"
    },
    {
        question: "Who is the current Prime Minister of India?",
        options: ["Narendra Modi", "Amit Shah", "Rajnath Singh", "Yogi Adityanath"],
        answer: "Narendra Modi"
    },
    {
        question: "Which mission successfully landed near the Moon's south pole in 2023?",
        options: ["Chandrayaan-3", "Apollo 11", "Artemis I", "Luna 25"],
        answer: "Chandrayaan-3"
    },
    {
        question: "Which country hosted the G20 Summit in 2023?",
        options: ["USA", "India", "Japan", "Germany"],
        answer: "India"
    },
    {
        question: "What is the name of India's digital payment system widely used across the country?",
        options: ["NEFT", "RTGS", "UPI", "SWIFT"],
        answer: "UPI"
    },
    {
        question: "Which organization conducts the NEET examination in India?",
        options: ["CBSE", "NTA", "UPSC", "AICTE"],
        answer: "NTA"
    },
    {
        question: "Which Indian state launched the 'Ladki Bahin Yojana' scheme?",
        options: ["Gujarat", "Maharashtra", "Rajasthan", "Karnataka"],
        answer: "Maharashtra"
    },
    {
        question: "Which country won the ICC Men's T20 World Cup 2024?",
        options: ["Australia", "India", "England", "South Africa"],
        answer: "India"
    },
    {
        question: "Who is the President of India?",
        options: ["Droupadi Murmu", "Narendra Modi", "Jagdeep Dhankhar", "Ram Nath Kovind"],
        answer: "Droupadi Murmu"
    },
    {
        question: "Which Indian city is known as India's Silicon Valley?",
        options: ["Mumbai", "Hyderabad", "Bengaluru", "Pune"],
        answer: "Bengaluru"
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
