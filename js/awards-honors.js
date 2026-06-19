const questions = [
    {
        question: "Which is India's highest civilian award?",
        options: ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
        answer: "Bharat Ratna"
    },
    {
        question: "Which award is known as the highest honor in Indian cinema?",
        options: ["Filmfare Award", "National Film Award", "Dadasaheb Phalke Award", "IIFA Award"],
        answer: "Dadasaheb Phalke Award"
    },
    {
        question: "Which award is given for outstanding contributions to literature in India?",
        options: ["Arjuna Award", "Jnanpith Award", "Rajiv Gandhi Khel Ratna", "Padma Shri"],
        answer: "Jnanpith Award"
    },
    {
        question: "Which award is India's highest sporting honor?",
        options: ["Arjuna Award", "Major Dhyan Chand Khel Ratna Award", "Dronacharya Award", "National Sports Award"],
        answer: "Major Dhyan Chand Khel Ratna Award"
    },
    {
        question: "The Nobel Prize was established by which scientist?",
        options: ["Albert Einstein", "Isaac Newton", "Alfred Nobel", "Thomas Edison"],
        answer: "Alfred Nobel"
    },
    {
        question: "Which award is presented for bravery to Indian military personnel during wartime?",
        options: ["Ashoka Chakra", "Param Vir Chakra", "Vir Chakra", "Kirti Chakra"],
        answer: "Param Vir Chakra"
    },
    {
        question: "Which award is India's highest peacetime gallantry award?",
        options: ["Vir Chakra", "Param Vir Chakra", "Ashoka Chakra", "Shaurya Chakra"],
        answer: "Ashoka Chakra"
    },
    {
        question: "Which international award is given annually for excellence in journalism, literature, and music?",
        options: ["Grammy Award", "Booker Prize", "Pulitzer Prize", "Oscar Award"],
        answer: "Pulitzer Prize"
    },
    {
        question: "Which award is popularly known as the 'Oscar'?",
        options: ["Golden Globe Award", "Academy Award", "BAFTA Award", "Emmy Award"],
        answer: "Academy Award"
    },
    {
        question: "Which Indian award is given to teachers for exceptional contribution in education?",
        options: ["National Teacher Award", "Padma Shri", "Dronacharya Award", "Jnanpith Award"],
        answer: "National Teacher Award"
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
