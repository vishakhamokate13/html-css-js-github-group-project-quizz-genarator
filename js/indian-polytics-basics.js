const questions = [
    {
        question: "Who is known as the Father of the Indian Constitution?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B. R. Ambedkar", "Sardar Patel"],
        answer: "Dr. B. R. Ambedkar"
    },
    {
        question: "When did the Constitution of India come into force?",
        options: ["15 August 1947", "26 January 1950", "26 November 1949", "2 October 1950"],
        answer: "26 January 1950"
    },
    {
        question: "How many Fundamental Rights are currently guaranteed by the Indian Constitution?",
        options: ["5", "6", "7", "8"],
        answer: "6"
    },
    {
        question: "Who is the constitutional head of India?",
        options: ["Prime Minister", "Chief Justice", "President", "Vice President"],
        answer: "President"
    },
    {
        question: "Which house of Parliament is known as the Upper House?",
        options: ["Lok Sabha", "Rajya Sabha", "Vidhan Sabha", "Legislative Council"],
        answer: "Rajya Sabha"
    },
    {
        question: "What is the minimum age to become a Member of Lok Sabha?",
        options: ["21 years", "25 years", "30 years", "35 years"],
        answer: "25 years"
    },
    {
        question: "Who appoints the Prime Minister of India?",
        options: ["Chief Justice", "President", "Governor", "Vice President"],
        answer: "President"
    },
    {
        question: "How many Schedules are there in the Indian Constitution at present?",
        options: ["10", "11", "12", "14"],
        answer: "12"
    },
    {
        question: "Which Article deals with Fundamental Rights?",
        options: ["Article 12–35", "Article 36–51", "Article 52–78", "Article 79–122"],
        answer: "Article 12–35"
    },
    {
        question: "Which part of the Constitution contains Directive Principles of State Policy?",
        options: ["Part II", "Part III", "Part IV", "Part V"],
        answer: "Part IV"
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
