const questions = [
    {
        question: "What does MERN stand for in web development?",
        answers: [
            {text: "A).  MongoDB, Express, React, Node.js", correct: true},
            {text: "B). MySQL, Express, React, Node.js", correct: false},
            {text: "C). MongoDB, Ember.js, React, Nginx", correct: false},
            {text: "D). MongoDB, Express, Ruby on Rails, Node.js", correct: false}

        ]
    },
    {
        question: "Which part of the MERN stack is responsible for handling server-side logic and routing?",
        answers: [
            {text: "A). MongoDB", correct: false},
            {text: "B). Express", correct: true},
            {text: "C). React", correct: false},
            {text: "D). Node.js", correct: false}

        ]
    },
    {
        question: "In the MERN stack, which technology is used for building user interfaces?",
        answers: [
            {text: "A). MongoDB", correct: false},
            {text: "B). Express", correct: false},
            {text: "C). React", correct: true},
            {text: "D). Node.js", correct: false}

        ]
    },
    {
        question: "Which database is typically used with the MERN stack for storing data?",
        answers: [
            {text: "A). MySQL", correct: false},
            {text: "B). PostgreSQL", correct: false},
            {text: "C). MongoDB", correct: false},
            {text: "D). SQLite", correct: true}

        ]
    },
    {
        question: "What role does Node.js play in the MERN stack?",
        answers: [
            {text: "A). Database management", correct: false},
            {text: "B). Front-end development", correct: false},
            {text: "C). Server-side scripting", correct: true},
            {text: "D). User interface design", correct: false}

        ]
    },
    {
        question: "Which component of the MERN stack manages the state of the application on the client side?",
        answers: [
            {text: "A). MongoDB", correct: false},
            {text: "B). Express", correct: false},
            {text: "C). React", correct: true},
            {text: "D). Node.js", correct: false}

        ]
    },
    {
        question: "What is used for managing packages and dependencies in a Node.js-based application within the MERN stack?",
        answers: [
            {text: "A). npm", correct: true},
            {text: "B). yarn", correct: false},
            {text: "C). gulp", correct: false},
            {text: "D). webpack", correct: false}

        ]
    },
    {
        question: "Which of the following is a popular alternative to Express.js for handling routing in Node.js applications?",
        answers: [
            {text: "A). Koa.js", correct: true},
            {text: "B). Hapi.js", correct: false},
            {text: "C). Sails.js", correct: false},
            {text: "D). Loopback", correct: false}

        ]
    },
    {
        question: "How does React handle rendering components compared to traditional JavaScript frameworks?",
        answers: [
            {text: "A). Using server-side rendering", correct: false},
            {text: "B). Using client-side rendering", correct: true},
            {text: "C). Using both server-side and client-side rendering", correct: false},
            {text: "D). Using static HTML files", correct: false}

        ]
    },
    {
        question: "Which MERN stack component provides an interface for interacting with MongoDB databases?",
        answers: [
            {text: "A). MongoDB Shell", correct: false},
            {text: "B). Mongoose", correct: true},
            {text: "C). MongoDB Express", correct: false},
            {text: "D). MongoDB React", correct: false}

        ]
    },
    {
        question: "What role does MongoDB play in the MERN stack?",
        answers: [
            {text: "A). Front-end development", correct: false},
            {text: "B). Database management", correct: true},
            {text: "C). Server-side scripting", correct: false},
            {text: "D). User interface design", correct: false}

        ]
    },
    {
        question: "Which component of the MERN stack provides a runtime environment for executing JavaScript code on the server side?",
        answers: [
            {text: "A). MongoDB", correct: false},
            {text: "B). Express", correct: false},
            {text: "C). React", correct: false},
            {text: "D). Node.js", correct: true}

        ]
    },
    {
        question: "Which of the following is a key advantage of using the MERN stack for web development?",
        answers: [
            {text: "A). Fast server-side rendering", correct: false},
            {text: "B). Easy integration with SQL databases", correct: false},
            {text: "C). Seamless isomorphic JavaScript", correct: true},
            {text: "D). Strong typing in JavaScript", correct: false}

        ]
    },
    {
        question: "Which programming language is primarily used for building applications with the MERN stack?",
        answers: [
            {text: "A). Python", correct: false},
            {text: "B). JavaScript", correct: true},
            {text: "C). Ruby", correct: false},
            {text: "D). Java", correct: false}

        ]
    },
    {
        question: "Which part of the MERN stack is responsible for defining the structure and behavior of the data models used in an application?",
        answers: [
            {text: "A). MongoDB", correct: true},
            {text: "B). Express", correct: false},
            {text: "C). React", correct: false},
            {text: "D). Node.js", correct: false}

        ]
    },

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex  = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();